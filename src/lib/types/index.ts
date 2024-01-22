import type { AuthSystemFields, UsersRecord,StudentsRecord,LecturersRecord,ServersRecord,BaseSystemFields,ChannelsRecord,MessagesRecord} from "$lib/types/pb"

export type BaseUser = AuthSystemFields & UsersRecord

export type Student = StudentsRecord & BaseUser

export type Lecturer = LecturersRecord & BaseUser

export type User = Student | Lecturer


export type Server = ServersRecord & BaseSystemFields

export type Channel = ChannelsRecord & BaseSystemFields

export type Message = MessagesRecord & BaseSystemFields