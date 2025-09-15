import { AllValue } from "@/context";
import { useState, useEffect } from "react";

const AllValueProvider = ({ children }) => {
  // Initialize from localStorage if exists

  const [role, setRole] = useState(() => localStorage.getItem("role") || "");

  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");

  const [resetToken, setResetToken] = useState(
    () => localStorage.getItem("resetToken") || ""
  );

  useEffect(() => {
    localStorage.setItem("role", role);
  }, [role]);

  // Sync email with localStorage
  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  // Sync resetToken with localStorage
  useEffect(() => {
    localStorage.setItem("resetToken", resetToken);
  }, [resetToken]);

  return (
    <AllValue.Provider
      value={{
        email,
        setEmail,
        resetToken,
        setResetToken,
        role,
        setRole
      }}
    >
      {children}
    </AllValue.Provider>
  );
};

export default AllValueProvider;
