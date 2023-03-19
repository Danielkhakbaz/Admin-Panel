import { useState, useEffect } from "react";
import { Heading, Skeleton } from "@chakra-ui/react";

const NonFinancialAssistance = () => {
  const [loadingState, setLoadingState] = useState();

  useEffect(() => {
    document.title = "کمک‌های غیرنقدی | پنل داشبورد پروژه ایکس";

    setTimeout(() => {
      setLoadingState(true);
    }, 150);
  }, []);

  return (
    <>
      <Skeleton width="fit-content" isLoaded={loadingState}>
        <Heading>NonFinancialAssistance</Heading>
      </Skeleton>
    </>
  );
};

export default NonFinancialAssistance;
