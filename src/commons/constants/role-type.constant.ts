export enum RoleType {
  SUPER_ADMIN = 'SUPER_ADMIN',
  USER_ADMIN = 'USER_ADMIN',
  PRINCIPLE = 'PRINCIPLE',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  PUBLIC = 'PUBLIC',
}

/** @constant AuthRoleTypes
 * List of RoleTypes which define the authenticated users (all except public)
 */
export const AuthRoleTypes = [
  RoleType.SUPER_ADMIN,
  RoleType.USER_ADMIN,
  RoleType.PRINCIPLE,
  RoleType.TEACHER,
  RoleType.STUDENT,
];
