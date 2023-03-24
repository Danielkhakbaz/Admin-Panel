import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  Button,
  Skeleton,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import MenuDrawer from "layout/dashboard/menu-drawer/menu-drawer";
import { useAPI } from "hooks/useApi";
import { useAuthContext } from "providers/auth/auth-context";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DashboardNavbar = () => {
  const [loadingState, setLoadingState] = useState(false);

  const navigate = useNavigate();

  const { logoutRequest } = useAPI();

  const toast = useToast();

  const { colorMode, toggleColorMode } = useColorMode();

  const { phoneNumber, passoword } = useAuthContext();

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(true);
    }, 150);
  }, []);

  return (
    <>
      <Flex alignItems="center" justifyContent="center" gap={5}>
        <Skeleton isLoaded={loadingState}>
          <MenuDrawer />
        </Skeleton>
        <Skeleton isLoaded={loadingState}>
          <Text fontWeight="black">پنل داشبورد پروژه ایکس</Text>
        </Skeleton>
      </Flex>
      <Flex gap={3}>
        <Skeleton isLoaded={loadingState}>
          <Button
            background="rgba(255, 255, 255, 0.2)"
            _active={{ background: "rgba(255, 255, 255, 0.48)" }}
            _hover={{ background: "rgba(255, 255, 255, 0.24)" }}
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <MdLightMode /> : <MdDarkMode />}
          </Button>
        </Skeleton>
        <Skeleton isLoaded={loadingState}>
          <Button
            colorScheme="red"
            fontSize={12}
            onClick={() => {
              logoutRequest(phoneNumber, passoword).then(({ data }) => {
                localStorage.clear();

                toast({
                  title: data.message,
                  status: "success",
                  duration: 2000,
                  position: "bottom-left",
                  containerStyle: {
                    fontSize: "14px",
                  },
                });
              });

              navigate("/");
            }}
          >
            خروج
          </Button>
        </Skeleton>
      </Flex>
    </>
  );
};

export default DashboardNavbar;
