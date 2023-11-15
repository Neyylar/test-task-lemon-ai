import { post } from '~/services/fetcher';
import type { AddUserRequest, AddUserResponse } from '~/types/user';

// eslint-disable-next-line import/prefer-default-export
export const addUser = (data: AddUserRequest) =>
  post<AddUserResponse>('/api/user', { ...data });
