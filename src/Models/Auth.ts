export interface AuthorizationToken {
    token: string;
    userId: string;
    userName: string;
    fullName: string;
    email: string;
    roles: string[];
    companyId?: number | null;
    loginPersisted: boolean;
    message: string;
  }
  export interface LoginRequest {
    userName: string;
    password: string;
  }

  export interface AuthState {
    user: AuthorizationToken | null;
    login: (tokenData: AuthorizationToken) => void;
    logout: () => void;
  }

  export interface RegisterRequest {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    companyEmail: string;
    address: string;
  }
  export interface ForgotPasswordRequest {
    email: string;
  }
 
  export interface ResetPasswordRequest {
    email: string;
    token: string;
    newPassword: string;
    confirmPassword: string;
  }
  export interface ResetPasswordFormProps {
    token: string;
    email: string;
  }
  export interface ConfirmEmailRequest {
    userId: string;
    token: string;
  }