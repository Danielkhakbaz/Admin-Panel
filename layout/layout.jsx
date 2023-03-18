import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import DashboardNavbar from "layout/dashboard/navbar/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Flex
        width="100vw"
        height="100vh"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Flex width="100%" height="100vh" flexDirection="column">
          <Flex
            height="72px"
            backgroundColor="primary.500"
            color="white"
            justifyContent="space-between"
            alignItems="center"
            padding={6}
          >
            <DashboardNavbar />
          </Flex>
          <Flex
            height="calc(100% - 72px)"
            flexDirection="column"
            gap={6}
            padding={4}
          >
            {children}
            <Outlet />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Layout;
