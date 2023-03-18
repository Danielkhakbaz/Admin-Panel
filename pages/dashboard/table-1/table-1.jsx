import { useState, useEffect } from "react";
import { Heading, Skeleton } from "@chakra-ui/react";

const Table1 = () => {
  const [loadingState, setLoadingState] = useState();

  useEffect(() => {
    document.title = "جدول یک | پنل داشبورد پروژه ایکس";

    setTimeout(() => {
      setLoadingState(true);
    }, 150);
  }, []);

  return (
    <>
      <Skeleton width="fit-content" isLoaded={loadingState}>
        <Heading>Table 1</Heading>
      </Skeleton>
    </>
  );
};

export default Table1;
