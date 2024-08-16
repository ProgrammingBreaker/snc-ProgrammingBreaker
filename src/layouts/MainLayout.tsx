import { FunctionComponent, PropsWithChildren, useState } from "react";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";
import { Card } from "@/components/Card";
import { CardSkeleton } from "@/components/CardSkeleton";
import { useLogging, useSafeLogContext } from "./LogContext";
import { CurrentDate } from "@/components/Logger";

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any | null>(null);
  const [currentRequest, setCurrentRequest] = useState<AbortController | null>(
    null,
  );

  useLogging({ personDetails: data });

  const handleButtonClick = async (person: string) => {
    if (person === Object.values(Person)[0] && selectedPerson === person) {
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);
    setSelectedPerson((prev) => (prev === person ? null : person));

    if (currentRequest) {
      currentRequest.abort();
    }

    const controller = new AbortController();
    setCurrentRequest(controller);

    try {
      const response = await fetch(`/api/person?person=${person}`, {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const result = await response.json();
      setData(result);
    } catch (err: any) {
      if (err.name !== "AbortError") {
        setError(`Error fetching data for ${person}`);
      }
    } finally {
      setLoading(false);
      setCurrentRequest(null);
    }
  };

  return (
    <main
      className={classNames(
        "h-screen w-screen",
        "flex flex-col justify-center items-center",
      )}
    >
      <CurrentDate />
      <div className={classNames("flex gap-2")}>
        {Object.values(Person).map((person) => (
          <Button
            key={person}
            isSelected={selectedPerson === person}
            onClick={() => handleButtonClick(person)}
          >
            {person}
          </Button>
        ))}
      </div>

      {selectedPerson && (
        <>
          {!data && !error && <CardSkeleton />}
          {data && !error && <Card {...data} />}
          {error && <div className="text-red-500 m-4">{error}</div>}
        </>
      )}
    </main>
  );
};
