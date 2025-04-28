import api from "../api/api";
import { ChangePasswordRequest, UpdateProfileRequest, UserInfoProfile } from "../Models/Profile";
import { Response } from "../Models/Shared";

const ProfileService = {
  updateProfile: async (data: UpdateProfileRequest): Promise<Response> => {
    const response = await api.put("/Account", data);
    return response.data;
  },

  changePassword: async (data: ChangePasswordRequest): Promise<Response> => {
    const response = await api.put("/Account/ChangePassword", data);
    return response.data;
  },
  getUserInfo: async (): Promise<UserInfoProfile > => {
    const response = await api.get("/Account/UserInfo");
    return response.data;
  }
};

export default ProfileService;
