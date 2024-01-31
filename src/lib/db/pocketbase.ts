import type { Attendence, BaseUser, Channel, Course, MemberWithServer, MessageWithUser, Resource, Server, Student } from '$lib/types';
import { Collections, ServersTypeOptions, type MembersRecord, type CoursesRecord, type AttendenceRecord } from '$lib/types/pb';
import PocketBase from 'pocketbase';

const url = 'http://127.0.0.1:8090'
export const pb = new PocketBase(url);

export async function loginUser(email: string, password: string) {
    await pb.collection(Collections.Users).authWithPassword(email, password);
}

export async function loginAdmin(email: string, password: string) {
    await pb.admins.authWithPassword(email, password);
}

export function logout() {
    pb.authStore.clear();
}

export async function getAllServers() {
    return await pb.collection<Server>("servers").getFullList();
}

export function getFileUrl(record: {
    [key: string]: any;
}, filename?: string): string {
    if (!filename) return ""
    return pb.files.getUrl(
        record,
        filename,
    )
}

export async function getChannels(serverId: string) {
    return await pb.collection<Channel>("channels").getFullList({
        filter: `server = "${serverId}"`,
    });
}

export async function getMessages(channelId: string) {
    const response = await pb.collection<MessageWithUser>("messages").getList(1, 50, {
        filter: `channel ="${channelId}"`,
        sort: "created",
        expand: "user",
    });
    return response.items
}

export async function getServers(userId: string) {
    const memberList = await pb.collection<MemberWithServer>("members").getFullList({
        filter: `user = "${userId}"`,
        expand: "server",
    });

    return memberList.map(memberModel => memberModel.expand.server)
}

export async function getAllViewableServers(userId: string) {
    return await pb.collection<Server>("servers").getFullList({
        filter: `public=true or id  in (select server_id from members where user = "${userId}")`
    }
    );
}


export async function createChannel(name: string, server: Server) {
    await pb.collection('channels').create({
        name: name,
        server: server.id
    });
}

export async function deleteChannel(channelId: string) {
    await pb.collection('channels').delete(channelId);
}

export const serverTypes = Object.values(ServersTypeOptions);


export async function getUniqueSems() {
    return pb.send<string[]>("/custom/unique/sem", {})
}

export async function getUniqueBranchs() {
    return pb.send<string[]>("/custom/unique/branch", {})
}

export async function getUniqueSections() {
    return pb.send<string[]>("/custom/unique/section", {})
}


export interface LecturerModel {
    id: string,
    email: string,
    avatar: string,
    name: string,
    role: string,
    department: string,
    post: string
}

export async function getAllLecturers() {
    return await pb.send<LecturerModel[]>("/custom/lecturers", {})
}

export async function getAllUsers() {
    return await pb.collection<BaseUser>(Collections.Users).getFullList()
}

export async function createSubjectServer(servername: string, ownerId: string, branch: string, sem: string, section: string, image: any) {
    const server = await pb.collection<Server>('servers').create({
        name: servername,
        type: ServersTypeOptions.SUBJECT,
        owner: ownerId,
        image: image
    });

    await pb.collection<Channel>(Collections.Channels).create({
        name: "general",
        server:server.id
    });

    const students = await pb.collection<Student>(Collections.Students).getFullList({
        filter: `branch = "${branch}" && sem = "${sem}" && section = "${section}"`
    })

    console.log("students", students)

    await pb.collection<MembersRecord>(Collections.Members).create({
        server: server.id,
        user: ownerId
    })

    const lecturerId = (await pb.collection<LecturerModel>(Collections.Lecturers).getFirstListItem(`user = "${ownerId}"`)).id

    console.log(await pb.collection<CoursesRecord>(Collections.Courses).create({
        name: servername,
        instructor: lecturerId,
        server: server.id,
        sem: sem,
        section: section
    }))

    for (const student of students) {
        await pb.collection<MembersRecord>(Collections.Members).create({
            server: server.id,
            user: student.user
        })
    }
}

export async function createClubServer(servername: string, ownerId: string, image: any) {
    const server = await pb.collection<Server>('servers').create({
        name: servername,
        type: ServersTypeOptions.SUBJECT,
        owner: ownerId,
        image: image
    });

    await pb.collection<MembersRecord>(Collections.Members).create({
        server: server.id,
        user: ownerId
    })
}


export async function createGeneralServer(servername: string, ownerId: string, image: any) {
    const server = await pb.collection<Server>('servers').create({
        name: servername,
        type: ServersTypeOptions.SUBJECT,
        owner: ownerId,
        image: image
    });

    await pb.collection<MembersRecord>(Collections.Members).create({
        server: server.id,
        user: ownerId
    })
}

export async function deleteServer(serverId: string) {
    await pb.collection(Collections.Servers).delete(serverId);
    const course = await pb.collection<Course>(Collections.Courses).getFirstListItem(`server = "${serverId}"`);
    await pb.collection(Collections.Servers).delete(course.id);
}


export async function getCourse(serverId: string) {
    const course = await pb.collection<Course>(Collections.Courses).getFirstListItem(`server = "${serverId}"`)
}

export async function fetchAttendence(serverId: string, date: string) {
    const course = await pb.collection<Course>(Collections.Courses).getFirstListItem(`server = "${serverId}"`)
    const attendenceList = await pb.collection<Attendence>(Collections.Attendence).getFullList({
        filter: `course = "${course.id}" && date = "${date} 00:00:00.000Z"`
    })
    return attendenceList
}

export async function fetchStudents(server: Server) {
    const members = await pb.collection<MessageWithUser>(Collections.Members).getFullList({
        filter: `server = "${server.id}" && user != "${server.owner}"`,
        expand: "user"
    })
    return members.map(member => {
        return member.expand.user
    })
}

export function getDateString(date: Date) {
    return `${date.getUTCFullYear()}-${(date.getUTCMonth() + 1).toString().padStart(2, '0')}-${date.getUTCDate().toString().padStart(2, '0')} 00:00:00.000Z`;
}

export async function getEnrolledCourses(studentUserId:string) {
    return await pb.send<Course[]>("/custom/unique/enrolledcourses", {"studentUserId":studentUserId})
}

export async function getCourseResources(courseId:string) {
    return await pb.collection<Resource>(Collections.Resources).getFullList({
        filter:`course = "${courseId}"`
    })
}

interface Students{
    branch:string,
    sem:string,
    usn:string,
    name:string
    section:string
}


async function createStudent(student:Students) {
    console.log(student.name)
    const user = await pb.collection<BaseUser>(Collections.Users).create({
        email:`${student.usn}@nmamit.in`,
        password: `${student.usn}@nmamit.in`,
        passwordConfirm:`${student.usn}@nmamit.in`,
        name: student.name,
        role:"STUDENT"
    })

    return await pb.collection(Collections.Students).create({
        usn:student.usn,
        sem:student.sem,
        section:student.section,
        branch:student.branch,
        user:user.id
    })
}

export async function createStudentViaJson(students:Students[]) {
    for(const student of students){
        await createStudent(student)
    }
}