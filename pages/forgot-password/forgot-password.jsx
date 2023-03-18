import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field } from "formik";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Heading,
  Text,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import { useAPI } from "hooks/useApi";
import PostmanLogo from "assets/logos/postman-logo.png";
import styles from "styles/modules/login.module.scss";

const ForgotPasswordPage = () => {
  const [buttonLoadingState, setButtonLoadingState] = useState();

  const phoneNumberRef = useRef();

  const navigate = useNavigate();

  const toast = useToast();

  const { colorMode } = useColorMode();

  const { resetPassword } = useAPI();

  useEffect(() => {
    if (colorMode === "dark") {
      localStorage.setItem("chakra-ui-color-mode", "light");

      navigate(0);
    }
    document.title = "فراموشی رمزعبور | پنل داشبورد پروژه ایکس";

    phoneNumberRef.current.focus();
  }, []);

  const handleClick = ({
    phoneNumber,
    vertificationCode,
    password,
    passwordConfirmation,
  }) => {
    setButtonLoadingState(true);

    resetPassword(
      phoneNumber,
      vertificationCode,
      password,
      passwordConfirmation
    )
      .then(({ data }) => {
        navigate("/login");

        return toast({
          title: data.message,
          status: "success",
          duration: 2000,
          position: "bottom-left",
          containerStyle: {
            fontSize: "14px",
          },
        });
      })
      .catch(({ response }) => {
        return toast({
          title: response.data.message,
          status: "error",
          duration: 2000,
          position: "bottom-left",
          containerStyle: {
            fontSize: "14px",
          },
        });
      })
      .finally(() => {
        setButtonLoadingState(false);
      });
  };
  const handleEnter = (event, values) => {
    if (event.key === "Enter" && values.phoneNumber && values.password) {
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
                phoneNumber: "",
                vertificationCode: "",
                password: "",
                passwordConfirmation: "",
              }}
            >
              {({ values, errors, touched, isValid, dirty }) => (
                <form
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                  onKeyDown={(event) => handleEnter(event, values)}
                >
                  <Heading size="md" textAlign="center" paddingY={4}>
                    فراموشی رمزعبور
                  </Heading>
                  <FormControl
                    isRequired
                    isInvalid={!!errors.phoneNumber && touched.phoneNumber}
                    marginY={2}
                  >
                    <FormLabel
                      fontSize={{ base: 11, sm: 12 }}
                      ref={phoneNumberRef}
                    >
                      شماره موبایل
                    </FormLabel>
                    <Field
                      as={Input}
                      autoComplete=""
                      name="phoneNumber"
                      type="text"
                      dir="ltr"
                      maxLength={100}
                      variant="outline"
                      fontSize={{ base: 12, sm: 14 }}
                    />
                  </FormControl>
                  <FormControl
                    isRequired
                    isInvalid={
                      !!errors.vertificationCode && touched.vertificationCode
                    }
                    marginY={2}
                  >
                    <FormLabel fontSize={{ base: 11, sm: 12 }}>
                      کد تائید
                    </FormLabel>
                    <Field
                      as={Input}
                      autoComplete=""
                      name="vertificationCode"
                      type="text"
                      dir="ltr"
                      maxLength={100}
                      variant="outline"
                      fontSize={{ base: 12, sm: 14 }}
                    />
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
                      maxLength={100}
                      variant="outline"
                      fontSize={{ base: 12, sm: 14 }}
                    />
                  </FormControl>
                  <FormControl
                    isRequired
                    isInvalid={
                      !!errors.passwordConfirmation &&
                      touched.passwordConfirmation
                    }
                    marginY={2}
                  >
                    <FormLabel fontSize={{ base: 11, sm: 12 }}>
                      تکرار رمز عبور
                    </FormLabel>
                    <Field
                      as={Input}
                      autoComplete=""
                      name="passwordConfirmation"
                      type="password"
                      dir="ltr"
                      maxLength={100}
                      variant="outline"
                      fontSize={{ base: 12, sm: 14 }}
                    />
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
                    ارسال کد
                  </Button>
                </form>
              )}
            </Formik>
          </Flex>
          <Flex flexDirection="column" gap={3}>
            <Link color="primary.500" fontSize={10} href="/vertification-code">
              صفحه ارسال کد تائید
            </Link>
            <Text fontSize={{ base: 8, sm: 9 }} textAlign="center">
              تمامی حقوق این وب‌سایت متعلق به <b>پروژه ایکس</b> می‌باشد&copy;
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default ForgotPasswordPage;
