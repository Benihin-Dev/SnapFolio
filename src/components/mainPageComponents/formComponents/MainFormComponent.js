import React from "react";
import UserDetailsForm from "../UserDetailsForm";
import { UserInfoProvider } from "../UserInfoProvider";

export default function MainFormComponent() {
  return (
    <div>
      <UserInfoProvider>
        <UserDetailsForm />
      </UserInfoProvider>
    </div>
  );
}
