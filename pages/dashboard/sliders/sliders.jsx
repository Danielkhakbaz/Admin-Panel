import { useState, useEffect } from "react";
import { Heading, Skeleton } from "@chakra-ui/react";

const Sliders = () => {
  const [loadingState, setLoadingState] = useState();

  useEffect(() => {
    document.title = "اسلایدر | پنل داشبورد پروژه ایکس";

    setTimeout(() => {
      setLoadingState(true);
    }, 150);
  }, []);

  return (
    <>
      <Skeleton width="fit-content" isLoaded={loadingState}>
        <Heading>Sliders</Heading>
      </Skeleton>
    </>
  );
};

export default Sliders;
