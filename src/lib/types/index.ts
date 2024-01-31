import type { AuthSystemFields, UsersRecord,StudentsRecord,LecturersRecord,ServersRecord,BaseSystemFields,ChannelsRecord,MessagesRecord, MembersRecord, CoursesRecord, ResourcesRecord, AttendenceRecord} from "$lib/types/pb"


// npx pocketbase-typegen --db ./pocketbase/pb_data/data.db --out pocketbase-types.ts

export type UserModel = AuthSystemFields & UsersRecord

export type StudentModel = StudentsRecord & UserModel

export type LecturerModel = LecturersRecord & UserModel

export type ServerModel = ServersRecord & BaseSystemFields

export type ChannelModel = ChannelsRecord & BaseSystemFields

export type CourseModel = CoursesRecord & BaseSystemFields

export type ResourceModel = ResourcesRecord & BaseSystemFields

export type AttendenceModel =  AttendenceRecord & BaseSystemFields

export type MessageModel = MessagesRecord & BaseSystemFields

type _expandUser = {
    user: UserModel;
};

export type MessageWithUser = MessagesRecord & Required<BaseSystemFields<_expandUser>>

export type MemberWithServer = MembersRecord & Required<BaseSystemFields<{server:ServerModel}>>

export type AttendenceWithStudent = AttendenceRecord & Required<BaseSystemFields<{student:StudentModel}>>

export type StudentAttendence = {
    id?: string;
    student: string;
    name: string;
    usn: string;
    present: boolean | undefined;
}


// export type Student = {
//     id?: string;
//     student: string;
//     name: string;
//     usn: string;
//     present: boolean | undefined;
// }