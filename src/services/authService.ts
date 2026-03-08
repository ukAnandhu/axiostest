import axiosInstance from "@/lib/axios";

interface LoginPayload {
  username: string;
  password: string;
}

export const loginUser = async (data: LoginPayload) => {
  const response = await axiosInstance.post("/auth/login", {
    username: data.username,
    password: data.password,
    expiresInMins: 30,
  });

  return response.data;
};