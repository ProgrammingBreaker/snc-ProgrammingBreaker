import { LogProvider } from "@/layouts/LogContext";
import { MainLayout } from "@/layouts/MainLayout";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <LogProvider>
      <MainLayout />
    </LogProvider>
  );
};

export default Home;
