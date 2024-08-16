import { useDate } from "@/hooks/useDate";
import { User } from "@/utils/common/person";
import React, {
  createContext,
  useContext,
  useState,
  FunctionComponent,
  PropsWithChildren,
  useEffect,
} from "react";

interface LogContextProps {
  enableLogs: boolean;
  toggleLogs: () => void;
}

interface UseLoggingProps {
  personDetails: User | null;
}

const LogContext = createContext<LogContextProps | null>(null);

export const useLogging = ({ personDetails }: UseLoggingProps) => {
  const { enableLogs } = useSafeLogContext();
  const { getCurrentDate } = useDate();

  useEffect(() => {
    if (enableLogs) {
      console.log("Person Details:", personDetails);
      console.log("Current Time:", getCurrentDate());
    }
  }, [personDetails, getCurrentDate, enableLogs]);
};

export const LogProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [enableLogs, setEnableLogs] = useState(false);

  const toggleLogs = () => setEnableLogs((prev) => !prev);

  return (
    <LogContext.Provider value={{ enableLogs, toggleLogs }}>
      {children}
    </LogContext.Provider>
  );
};

export const useSafeLogContext = () => {
  const context = useContext(LogContext);
  if (!context) {
    throw new Error("useSafeLogContext must be used within a LogProvider");
  }
  return context;
};
