import CoachArticles from "@/components/coachDetails/CoachArticles";
import CoachInfo from "@/components/coachDetails/CoachInfo";
import React from "react";

const CoachDetails = () => {
  return (
    <div className=" mb-6">
      <CoachInfo />
      <CoachArticles />
    </div>
  );
};

export default CoachDetails;
