import {
  Flex,
  Button,
  Text,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { MenuItems } from "layout/dashboard/menu-drawer/menu-items";
import PostmanLogo from "assets/logos/postman-logo.png";
import { FaBars } from "react-icons/fa";

const MenuDrawer = () => {
  const { colorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex>
        <Button
          variant="solid"
          background="rgba(255, 255, 255, 0.2)"
          _active={{ background: "rgba(255, 255, 255, 0.48)" }}
          _hover={{ background: "rgba(255, 255, 255, 0.24)" }}
          onClick={onOpen}
        >
          <FaBars />
        </Button>
        <Drawer
          onClose={onClose}
          isOpen={isOpen}
          size={{ base: "full", sm: "xs" }}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody
              display="flex"
              flexDirection="column"
              gap={8}
              paddingBottom={6}
            >
              <DrawerCloseButton
                backgroundColor={
                  colorMode === "light" ? "gray.200" : "gray.900"
                }
                position="relative"
              />
              <Flex justifyContent="center" alignItems="center">
                <img src={PostmanLogo} width={125} alt="logo" />
              </Flex>
              <DrawerHeader
                fontWeight="black"
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginTop={4}
                padding={0}
              >
                پنل داشبورد پروژه ایکس
              </DrawerHeader>
              <Flex flexDirection="column" gap={4}>
                {MenuItems.map(({ title, link }) => (
                  <Link
                    key={title}
                    _hover={{ textDecoration: "none" }}
                    href={`/dashboard/${link}`}
                  >
                    <Button
                      width="100%"
                      colorScheme="primary"
                      color="white"
                      paddingY={7}
                      onClick={onClose}
                    >
                      <Text>{title}</Text>
                    </Button>
                  </Link>
                ))}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default MenuDrawer;
