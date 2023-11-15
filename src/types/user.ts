export type User = {
  name: string;
  email: string;
  emailSubscription: boolean;
};

export type AddUserRequest = User;

export type AddUserResponse = {
  message: string;
  user?: User;
};
