import api from "../api/api";
import { AuthorizationToken, ConfirmEmailRequest, ForgotPasswordRequest, LoginRequest, RegisterRequest, ResetPasswordRequest, } from "../Models/Auth";
import { Response } from "../Models/Shared";


const AuthService = {
  login: async (credentials: LoginRequest): Promise<AuthorizationToken> => {
    const response = await api.post("/Account/login", credentials);
    return response.data;
  },
  register: async (credentials: RegisterRequest): Promise<Response> => {
    const response = await api.post("/User/Register", credentials);
    return response.data;
  },
  forgotPassword: async (credentials: ForgotPasswordRequest): Promise<Response> => {
    const response = await api.post("/User/GetResetPasswordLink", credentials);
    return response.data;
  },
  resetPassword: async (credentials: ResetPasswordRequest): Promise<Response> => {
    const response = await api.put("/User/ResetPassword", credentials);
    return response.data;
  },
  confirmEmail: async (command: ConfirmEmailRequest): Promise<void> => {
    await api.put("/User/ConfirmEmail", command); 
  }
};

export default AuthService;
