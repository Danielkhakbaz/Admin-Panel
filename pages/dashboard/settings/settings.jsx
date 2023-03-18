import { useState, useEffect } from "react";
import { Heading, Skeleton } from "@chakra-ui/react";

const Settings = () => {
  const [loadingState, setLoadingState] = useState();

  useEffect(() => {
    document.title = "تنظیمات | پنل داشبورد پروژه ایکس";

    setTimeout(() => {
      setLoadingState(true);
    }, 150);
  }, []);

  return (
    <>
      <Skeleton width="fit-content" isLoaded={loadingState}>
        <Heading>Settings</Heading>
      </Skeleton>
    </>
  );
};

export default Settings;
