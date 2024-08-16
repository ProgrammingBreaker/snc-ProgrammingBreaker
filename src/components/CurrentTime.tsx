import { useDate } from "@/hooks/useDate";
import React, { FunctionComponent, useEffect, useState } from "react";

export const CurrentTime: FunctionComponent = () => {
  const [currentDate, setCurrentDate] = useState<string>();
  const { getCurrentDate } = useDate();

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentDate(getCurrentDate());
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, [getCurrentDate, setCurrentDate]);

  return <span>{currentDate}</span>;
};
