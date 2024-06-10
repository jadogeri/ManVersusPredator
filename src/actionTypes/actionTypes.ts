export type LoginAction =
  | { type: "SPECIAL" , input: LoginData }
  | { type: "HEALTH" , user: UserData }
  | { type: "STRENGTH" , error: string };
