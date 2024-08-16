import { useSafeLogContext } from "@/layouts/LogContext";
import React, { FunctionComponent } from "react";
import { Button } from "./Button";
import { CurrentTime } from "./CurrentTime";

export const CurrentDate: FunctionComponent = () => {
  const { enableLogs, toggleLogs } = useSafeLogContext();

  return (
    <div className="absolute top-4 left-4 flex flex-col gap-2">
      <CurrentTime />
      <Button onClick={toggleLogs} isSelected={enableLogs}>
        {enableLogs ? "Disable Logs" : "Enable Logs"}
      </Button>
    </div>
  );
};
