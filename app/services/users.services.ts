import { ISignup, IUser } from "@/components/interfaces";
import { api } from "@/lib/axion";

export async function SignInUser(data: { email: string; password: string }) {
  const result = await api.post("/users/signin", data);
  return result;
}

export async function SignUpUser(data: ISignup) {
  const result = await api.post("/users/signup", data);
  return result;
}

export async function getMe(): Promise<IUser> {
  const result = await api.get("/users/me");
  return result.data.data.doc;
}

export async function ForgetPassword(data: { email: string }) {
  const result = await api.post("/users/forgetpassword", data);
  return result.data;
}

export async function SignOutUser() {
  const result = await api.post("/users/signout");
  return result.data;
}

export async function ResetPassword({
  resetToken,
  data,
}: {
  resetToken: string;
  data: {
    password: string;
    confirmPassword: string;
  };
}) {
  const result = await api.patch(`/users/resetpassword/${resetToken}`, data);
  return result.data;
}
