export interface UpdateProfileRequest {
    firstName: string;
    lastName: string;
    phone: string;
  }
  
  export interface ChangePasswordRequest {
    oldPassword: string;
    password: string;
    confimedPassword: string;
  }
  export interface UserInfoProfile {
    id: string;
    userName?: string;
    email?: string;
    phoneNumber?: string;
    firstName: string;
    isActive?: boolean;
    isAdmin?: boolean;
    lastName: string;
    initials?: string;
    roles: string[];
  }
  
  
  
  