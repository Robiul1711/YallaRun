
import { AllValue } from "@/context";
import { useContext } from "react";

export const useAll = () => {
  return useContext(AllValue);
};