import { useEffect } from "react";
import { Heading } from "@chakra-ui/react";

const Index = () => {
  useEffect(() => {
    document.title = "خانه | پنل داشبورد پروژه ایکس";
  }, []);

  return (
    <>
      <Heading>خانه</Heading>
    </>
  );
};

export default Index;
