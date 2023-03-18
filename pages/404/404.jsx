import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Heading, Text, Link, Button } from "@chakra-ui/react";

const NotFound = () => {
  const [countDown, setCountDown] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "صفحه‌ای یافت نشد | پنل داشبورد پروژه ایکس";

    setTimeout(() => {
      if (countDown > 0) {
        setCountDown(() => countDown - 1);
      }
    }, 1000);

    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [countDown]);

  return (
    <>
      <Flex
        width="100vw"
        height="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={8}
        padding={4}
      >
        <Flex flexDirection="column" alignItems="center" gap={8}>
          <Heading size="md">صفحه‌ی مورد نظر یافت نشد!</Heading>
          <Text textAlign="justify">
            شما به صورت خودکار، پس از {countDown.toLocaleString("fa")} ثانیه به
            صفحه‌ی خانه برمیگردید!
          </Text>
          <Link href="/" _hover={{ textDecoration: "none" }}>
            <Button colorScheme="primary">بازگشت به خانه</Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default NotFound;
