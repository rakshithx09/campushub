import type { AuthSystemFields, UsersRecord,StudentsRecord,LecturersRecord,ServersRecord,BaseSystemFields,ChannelsRecord,MessagesRecord, MembersRecord, CoursesRecord} from "$lib/types/pb"


// npx pocketbase-typegen --db ./pocketbase/pb_data/data.db --out pocketbase-types.ts

export type BaseUser = AuthSystemFields & UsersRecord

export type Student = StudentsRecord & BaseUser

export type Lecturer = LecturersRecord & BaseUser

export type User = Student | Lecturer


export type Server = ServersRecord & BaseSystemFields

export type Channel = ChannelsRecord & BaseSystemFields

export type Course = CoursesRecord & BaseSystemFields

export type Attendence =  CoursesRecord & BaseSystemFields

export type Message = MessagesRecord & BaseSystemFields

type _expandUser = {
    user: BaseUser;
};

export type MessageWithUser = MessagesRecord & Required<BaseSystemFields<_expandUser>>

export type MemberWithServer = MembersRecord & Required<BaseSystemFields<{server:Server}>>