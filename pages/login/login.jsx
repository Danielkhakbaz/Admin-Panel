import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Center,
  Text,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import PostmanLogo from "assets/logos/postman-logo.png";
import styles from "styles/modules/login.module.scss";

const LoginPage = () => {
  const [buttonLoadingState, setButtonLoadingState] = useState();

  const usernameRef = useRef();

  const navigate = useNavigate();

  const toast = useToast();

  const { colorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") {
      localStorage.setItem("chakra-ui-color-mode", "light");

      navigate(0);
    }
    document.title = "پنل داشبورد پروژه ایکس";

    usernameRef.current.focus();
  }, []);

  const handleClick = ({ username, password }) => {
    setButtonLoadingState(true);

    setTimeout(() => {
      setButtonLoadingState(false);

      if (username === "admin" && password === "admin") {
        navigate("dashboard");

        return toast({
          title: "شما با موفقیت وارد شدید",
          status: "success",
          duration: 2000,
          position: "bottom-left",
          containerStyle: {
            fontSize: "14px",
          },
        });
      } else {
        return toast({
          title: "اطلاعات کاربری نادرست است",
          status: "error",
          duration: 2000,
          position: "bottom-left",
          containerStyle: {
            fontSize: "14px",
          },
        });
      }
    }, 500);
  };
  const handleEnter = (event, values) => {
    if (event.key === "Enter" && values.username && values.password) {
      handleClick(values);
    }
  };

  return (
    <>
      <Flex
        className={styles.login__background}
        minWidth="100vw"
        height="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={6}
        padding={6}
      >
        <Flex width={{ base: 160, sm: 200 }}>
          <img src={PostmanLogo} alt="logo" />
        </Flex>
        <Flex
          background="white"
          flexDirection="column"
          gap={8}
          borderRadius="7px"
          boxShadow="2xl"
          padding={{ base: 4, sm: 6 }}
        >
          <Flex>
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={Yup.object({
                username: Yup.string().required(
                  "نام کاربری نمیتواند خالی باشد!"
                ),
                password: Yup.string()
                  .required("رمز عبور نمیتواند خالی باشد!")
                  .min(4, "رمز عبور شما نمیتواند کمتر از 4 کاراکتر باشد!"),
              })}
            >
              {({ values, errors, touched, isValid, dirty }) => (
                <form
                  style={{ width: "100%" }}
                  onKeyDown={(event) => handleEnter(event, values)}
                >
                  <FormControl
                    isRequired
                    isInvalid={!!errors.username && touched.username}
                    marginY={2}
                  >
                    <FormLabel
                      fontSize={{ base: 11, sm: 12 }}
                      ref={usernameRef}
                    >
                      نام کاربری
                    </FormLabel>
                    <Field
                      as={Input}
                      autoComplete=""
                      name="username"
                      type="text"
                      dir="ltr"
                      maxLength={100}
                      variant="outline"
                      fontSize={{ base: 12, sm: 14 }}
                    />
                    <FormErrorMessage fontSize={{ base: 9, sm: 10 }}>
                      {errors.username}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isRequired
                    isInvalid={!!errors.password && touched.password}
                    marginY={2}
                  >
                    <FormLabel fontSize={{ base: 11, sm: 12 }}>
                      رمز عبور
                    </FormLabel>
                    <Field
                      as={Input}
                      autoComplete=""
                      name="password"
                      type="password"
                      dir="ltr"
                      maxLength={20}
                      variant="outline"
                      fontSize={{ base: 12, sm: 14 }}
                    />
                    <FormErrorMessage fontSize={{ base: 9, sm: 10 }}>
                      {errors.password}
                    </FormErrorMessage>
                  </FormControl>
                  <Button
                    colorScheme="primary"
                    width="100%"
                    fontSize={{ base: 13, sm: 16 }}
                    marginTop={6}
                    isDisabled={!isValid || !dirty}
                    isLoading={buttonLoadingState}
                    onClick={() => handleClick(values)}
                  >
                    ورود
                  </Button>
                </form>
              )}
            </Formik>
          </Flex>
          <Center>
            <Text fontSize={{ base: 8, sm: 9 }}>
              تمامی حقوق این وب‌سایت متعلق به <b>پروژه ایکس</b> می‌باشد&copy;
            </Text>
          </Center>
        </Flex>
      </Flex>
    </>
  );
};

export default LoginPage;
