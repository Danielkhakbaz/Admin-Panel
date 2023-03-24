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
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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
                      _hover={{ colorScheme: "primary" }}
                    >
                      <Text>{title}</Text>
                    </Button>
                  </Link>
                ))}
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton
                      as={Button}
                      width="100%"
                      colorScheme="primary"
                      color="white"
                      paddingY={7}
                      _hover={{ colorScheme: "primary" }}
                    >
                      <Box as="span" textAlign="left">
                        تنظیمات
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel
                      display="flex"
                      flexDirection="column"
                      gap={4}
                      paddingY={4}
                    >
                      <Accordion allowToggle>
                        <AccordionItem>
                          <AccordionButton
                            as={Button}
                            width="100%"
                            backgroundColor="primary.700"
                            fontSize={14}
                            color="white"
                            paddingY={5}
                            _hover={{ backgroundColor: "primary.900" }}
                          >
                            <Box as="span" textAlign="left">
                              تغییر متن ارتباط با ما
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel
                            display="flex"
                            flexDirection="column"
                            gap={4}
                            paddingY={4}
                          >
                            <Link
                              href={`/dashboard/settings/change-contactus/social-apps`}
                              _hover={{ textDecoration: "none" }}
                            >
                              <Button
                                width="100%"
                                fontSize={14}
                                backgroundColor="primary.800"
                                color="white"
                                paddingY={5}
                                _hover={{ backgroundColor: "primary.900" }}
                              >
                                تغییر اطلاعات شبکه‌های مجازی
                              </Button>
                            </Link>
                            <Link
                              href={`/dashboard/settings/change-contactus/card-information`}
                              _hover={{ textDecoration: "none" }}
                            >
                              <Button
                                width="100%"
                                fontSize={14}
                                backgroundColor="primary.800"
                                color="white"
                                paddingY={5}
                                _hover={{ backgroundColor: "primary.900" }}
                              >
                                تغییر اطلاعات خیریه
                              </Button>
                            </Link>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                      <Link
                        href={`/dashboard/settings/change-aboutus`}
                        _hover={{ textDecoration: "none" }}
                      >
                        <Button
                          width="100%"
                          fontSize={14}
                          backgroundColor="primary.700"
                          color="white"
                          paddingY={5}
                          _hover={{ backgroundColor: "primary.900" }}
                        >
                          تغییر متن درباره ما
                        </Button>
                      </Link>
                      <Link
                        href={`/dashboard/settings/change-footer`}
                        _hover={{ textDecoration: "none" }}
                      >
                        <Button
                          width="100%"
                          fontSize={14}
                          backgroundColor="primary.700"
                          color="white"
                          paddingY={5}
                          _hover={{ backgroundColor: "primary.900" }}
                        >
                          تغییر متن فوتر
                        </Button>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default MenuDrawer;
