import React, { useState } from "react";
import { Title20, Title48 } from "../common/Title";
import { SendIcon } from "../icons/CustomIcon";
import JoinImage from "@/assets/images/joinImage.png";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";

const JoinSection = () => {
  const axiosPublic = useAxiosPublic();
  const [email, setEmail] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: async (emailValue) => {
      const res = await axiosPublic.post("/newsletter", { email: emailValue });
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data.message || "Subscribed successfully!");
      setEmail("");
    },
    onError: (error) => {
      // Show a more readable error message
      toast.error(
        error?.response?.data?.errors.email[0] ||
          error?.message ||
          "Something went wrong"
      );
    },
  });

  const handleSubmit = () => {
    if (!email) {
      toast.error("Please enter a valid email address");
      return;
    }
    mutate(email);
  };

  return (
    <div className="section-padding-x section-padding-y w-full flex xlg:h-[600px]">
      {/* Left content */}
      <div className="md:w-[55%] w-full xlg:px-12 px-6 xlg:py-20 py-10 bg-primaryColor flex flex-col xlg:gap-10 gap-6 rounded-tl-xl rounded-bl-xl">
        <div className="flex flex-col gap-4">
          <Title48 className="!text-white font-[800] xlg:!leading-[72px] md:!leading-[55px]">
            Join the UAE’s Largest Running Community Today!
          </Title48>

          <Title20 className="!text-white !font-medium">
            Stay updated on the latest events, inspiring articles, coach tips,
            and exclusive offers delivered straight to your inbox.
          </Title20>
        </div>

        <div className="max-w-[600px] flex items-center gap-3">
          <div className="w-[90%] px-5 py-4 bg-white rounded-[8px]">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none border-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={isPending}
            className="bg-white rounded-[8px] p-4 w-24 h-14 flex justify-center items-center duration-200 group relative min-w-[48px] min-h-[48px]"
          >
            {isPending ? (
              <BeatLoader size={8} color="#000" />
            ) : (
              <span className="group-hover:rotate-45 duration-200">
                <SendIcon />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Right image */}
      <div className="w-[45%] rounded-tr-xl rounded-br-xl md:flex hidden">
        <img
          src={JoinImage}
          className="w-full h-full object-cover rounded-tr-xl rounded-br-xl"
          alt="joinImage"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default JoinSection;
