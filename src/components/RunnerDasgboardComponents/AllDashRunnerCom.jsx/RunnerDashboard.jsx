import React from "react";
import RunnerDashBanner from "./RunnerDashBanner";
import RunnerStare from "./RunnerStare";
import RunnerUpcommingEvent from "./RunnerUpcommingEvent";
import RunnerPastEvent from "./RunnerPastEvent";

const RunnerDashboard = () => {
  return (
    <div className="space-y-6 md:space-y-9">
      <RunnerDashBanner />
      <RunnerStare />
      <div className="grid lg:grid-cols-2 xlg:grid-cols-1 xl:grid-cols-2 grid-cols-1  gap-6">
        <RunnerUpcommingEvent />
        <RunnerPastEvent />
      </div>
    </div>
  );
};

export default RunnerDashboard;
