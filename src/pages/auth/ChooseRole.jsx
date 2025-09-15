import { useAll } from "@/hooks/useAll";
import React from "react";
import A2 from "@/assets/images/a2.png";
import AuthProvider from "@/components/auth/AuthProvider";
import { Link } from "react-router-dom";

const ChooseRole = () => {
  const { role, setRole } = useAll();

  const roles = [
    {
      id: "runner",
      title: "Runner",
      description:
        "Track your runs, explore events, and connect with the community.",
    },
    {
      id: "coach",
      title: "Coach",
      description:
        "Showcase your profile, connect with runners, and offer training.",
    },
  ];

  return (
    <AuthProvider
      sectionImage={A2}
      title="Choose Your Role"
      text="Select how you want to be part of YallaRun."
    >
      <div className="flex flex-col gap-4 ">
        {roles.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setRole(item.id)}
            className={`w-full text-left p-4 rounded-lg border transition-all flex flex-col
              ${
                role === item.id
                  ? "border-primaryColor bg-primaryColor/10"
                  : "border-gray-300 bg-white"
              }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span
                className={`w-5 h-5 rounded-full border flex items-center justify-center
                  ${
                    role === item.id
                      ? "border-primaryColor bg-primaryColor"
                      : "border-gray-400 bg-white"
                  }`}
              >
                {role === item.id && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </span>
            </div>
            <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
          </button>
        ))}

        <div className="flex justify-between mt-6">
          <Link
          to={`/`}
            type="button"
            className="px-6 py-2 border rounded-full text-primaryColor font-medium"
          >
            Back
          </Link>
          <Link
          to={ role==='runner' ?"/runner-sign-up":"/coach-sign-up"}
            type="button"
            className="px-6 py-2 rounded-full bg-lime-500 text-white font-medium shadow-md"
          >
            Continue
          </Link>
        </div>
      </div>
    </AuthProvider>
  );
};

export default ChooseRole;
