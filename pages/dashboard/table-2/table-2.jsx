import { useState, useEffect } from "react";
import { Heading, Skeleton } from "@chakra-ui/react";

const Table2 = () => {
  const [loadingState, setLoadingState] = useState();

  useEffect(() => {
    document.title = "جدول دو | پنل داشبورد پروژه ایکس";

    setTimeout(() => {
      setLoadingState(true);
    }, 150);
  }, []);

  return (
    <>
      <Skeleton width="fit-content" isLoaded={loadingState}>
        <Heading>Table 2</Heading>
      </Skeleton>
    </>
  );
};

export default Table2;
