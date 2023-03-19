import { useState, useEffect } from "react";
import { Heading, Skeleton } from "@chakra-ui/react";

const FinancialAssistance = () => {
  const [loadingState, setLoadingState] = useState();

  useEffect(() => {
    document.title = "کمک‌های نقدی | پنل داشبورد پروژه ایکس";

    setTimeout(() => {
      setLoadingState(true);
    }, 150);
  }, []);

  return (
    <>
      <Skeleton width="fit-content" isLoaded={loadingState}>
        <Heading>FinancialAssistance</Heading>
      </Skeleton>
    </>
  );
};

export default FinancialAssistance;
