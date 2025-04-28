import * as React from "react";
import ChangePasswordForm from "./ChangePasswordForm";
import PersonalInfoForm from "./PersonalInfoForm";

const ProfileSettings: React.FC = () => {
  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: "2rem" }}>
      <PersonalInfoForm />
      <ChangePasswordForm />
    </div>
  );
};

export default ProfileSettings;
