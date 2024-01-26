/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Channels = "channels",
	Departments = "departments",
	Lecturers = "lecturers",
	Members = "members",
	Messages = "messages",
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

export type DepartmentsRecord = {
	hod?: RecordIdString
	name: string
}

export type LecturersRecord = {
	department: RecordIdString
	post?: string
	user: RecordIdString
}

export type MembersRecord = {
	server: RecordIdString
	user: RecordIdString
}

export type MessagesRecord = {
	channel?: RecordIdString
	content?: string
	user?: RecordIdString
}

export enum ServersTypeOptions {
	"SUBJECT" = "SUBJECT",
	"GENERAL" = "GENERAL",
	"CLUB" = "CLUB",
}
export type ServersRecord = {
	image?: string
	name: string
	owner?: RecordIdString
	type: ServersTypeOptions
}

export type StudentsRecord = {
	user?: RecordIdString
	usn: string
}

export enum UsersRoleOptions {
	"STUDENT" = "STUDENT",
	"LECTURER" = "LECTURER",
	"STAFF" = "STAFF",
}
export type UsersRecord = {
	avatar?: string
	name: string
	role: UsersRoleOptions
}

// Response types include system fields and match responses from the PocketBase API
export type ChannelsResponse<Texpand = unknown> = Required<ChannelsRecord> & BaseSystemFields<Texpand>
export type DepartmentsResponse<Texpand = unknown> = Required<DepartmentsRecord> & BaseSystemFields<Texpand>
export type LecturersResponse<Texpand = unknown> = Required<LecturersRecord> & BaseSystemFields<Texpand>
export type MembersResponse<Texpand = unknown> = Required<MembersRecord> & BaseSystemFields<Texpand>
export type MessagesResponse<Texpand = unknown> = Required<MessagesRecord> & BaseSystemFields<Texpand>
export type ServersResponse<Texpand = unknown> = Required<ServersRecord> & BaseSystemFields<Texpand>
export type StudentsResponse<Texpand = unknown> = Required<StudentsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	channels: ChannelsRecord
	departments: DepartmentsRecord
	lecturers: LecturersRecord
	members: MembersRecord
	messages: MessagesRecord
	servers: ServersRecord
	students: StudentsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	channels: ChannelsResponse
	departments: DepartmentsResponse
	lecturers: LecturersResponse
	members: MembersResponse
	messages: MessagesResponse
	servers: ServersResponse
	students: StudentsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'channels'): RecordService<ChannelsResponse>
	collection(idOrName: 'departments'): RecordService<DepartmentsResponse>
	collection(idOrName: 'lecturers'): RecordService<LecturersResponse>
	collection(idOrName: 'members'): RecordService<MembersResponse>
	collection(idOrName: 'messages'): RecordService<MessagesResponse>
	collection(idOrName: 'servers'): RecordService<ServersResponse>
	collection(idOrName: 'students'): RecordService<StudentsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
