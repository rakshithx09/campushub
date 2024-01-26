/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Channels = "channels",
	Department = "department",
	Lecturers = "lecturers",
	Members = "members",
	Messages = "messages",
	Sections = "sections",
	Servers = "servers",
	Students = "students",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ChannelsRecord = {
	name: string
	server: RecordIdString
}

export type DepartmentRecord = {
	hod?: string
	name: string
}

export type LecturersRecord = {
	department: RecordIdString
	name: string
	post?: string
	user: RecordIdString
}

export type MembersRecord = {
	server: RecordIdString
	user: RecordIdString
}

export type MessagesRecord = {
	channel: RecordIdString
	content: string
	user: RecordIdString
}

export type SectionsRecord = {
	advisor?: string
	branch: RecordIdString
	cr?: string
	name: string
}

export type ServersRecord = {
	image?: string
	name: string
	owner?: RecordIdString
	public?: boolean
}

export type StudentsRecord = {
	branch?: RecordIdString
	name?: string
	section?: RecordIdString
	user: RecordIdString
	usn: string
	year?: string
}

export enum UsersRoleOptions {
	"STUDENT" = "STUDENT",
	"LECTURER" = "LECTURER",
	"STAFF" = "STAFF",
}
export type UsersRecord = {
	avatar?: string
	role: UsersRoleOptions
}

// Response types include system fields and match responses from the PocketBase API
export type ChannelsResponse<Texpand = unknown> = Required<ChannelsRecord> & BaseSystemFields<Texpand>
export type DepartmentResponse<Texpand = unknown> = Required<DepartmentRecord> & BaseSystemFields<Texpand>
export type LecturersResponse<Texpand = unknown> = Required<LecturersRecord> & BaseSystemFields<Texpand>
export type MembersResponse<Texpand = unknown> = Required<MembersRecord> & BaseSystemFields<Texpand>
export type MessagesResponse<Texpand = unknown> = Required<MessagesRecord> & BaseSystemFields<Texpand>
export type SectionsResponse<Texpand = unknown> = Required<SectionsRecord> & BaseSystemFields<Texpand>
export type ServersResponse<Texpand = unknown> = Required<ServersRecord> & BaseSystemFields<Texpand>
export type StudentsResponse<Texpand = unknown> = Required<StudentsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	channels: ChannelsRecord
	department: DepartmentRecord
	lecturers: LecturersRecord
	members: MembersRecord
	messages: MessagesRecord
	sections: SectionsRecord
	servers: ServersRecord
	students: StudentsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	channels: ChannelsResponse
	department: DepartmentResponse
	lecturers: LecturersResponse
	members: MembersResponse
	messages: MessagesResponse
	sections: SectionsResponse
	servers: ServersResponse
	students: StudentsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'channels'): RecordService<ChannelsResponse>
	collection(idOrName: 'department'): RecordService<DepartmentResponse>
	collection(idOrName: 'lecturers'): RecordService<LecturersResponse>
	collection(idOrName: 'members'): RecordService<MembersResponse>
	collection(idOrName: 'messages'): RecordService<MessagesResponse>
	collection(idOrName: 'sections'): RecordService<SectionsResponse>
	collection(idOrName: 'servers'): RecordService<ServersResponse>
	collection(idOrName: 'students'): RecordService<StudentsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
