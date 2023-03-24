import { useEffect } from "react";
import { Formik, Field } from "formik";
import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useFooterText } from "hooks/useQuery";
import { useAPI } from "hooks/useApi";

const Footer = () => {
  const { data, isLoading } = useFooterText();

  const { setFooterText } = useAPI();

  useEffect(() => {
    document.title = "تغییر متن فوتر | پنل داشبورد پروژه ایکس";
  });

  return !isLoading ? (
    <>
      <Flex
        minWidth="100vw"
        height="100vh"
        flexDirection="column"
        gap={6}
        padding={6}
      >
        <Flex>
          <Formik
            initialValues={{
              // top_logo: {
              //   logo_path: "",
              //   persian_name: "",
              // },
              // footer_logo: {
              //   logo_path: "",
              //   persian_name: "",
              // },
              // footer_yara: {
              //   url: "",
              //   logo_path: "",
              //   persian_name: "",
              // },
              // footer_email: {
              //   text: "",
              //   persian_name: "",
              // },
              // footer_namad: { url: "", persian_name: "" },
              // footer_phone: {
              //   text: "",
              //   persian_name: "",
              // },
              // footer_aparat: { url: "", persian_name: "" },
              // footer_address: {
              //   address1: "",
              //   address2: "",
              //   persian_name: "",
              // },
              // footer_telegram: { url: "", persian_name: "" },
              // footer_whatsapp: { url: "", persian_name: "" },
              // footer_instagram: { url: "", persian_name: "" },
              // footer_right_text: {
              //   text: "",
              //   persian_name: "",
              // },
              // footer_khodmol_hossein: {
              //   url: "",
              //   logo_path: "",
              //   persian_name: "",
              // },
              // footer_digital_media: {
              //   url: "",
              //   persian_name: "",
              // },
              footer_middle_first_text: {
                text: "",
              },
              footer_middle_second_text: {
                text: "",
              },
              footer_middle_third_text: {
                text: "",
              },
            }}
          >
            {({ values }) => (
              <form style={{ width: "100%" }}>
                <Flex flexDirection="column">
                  <FormControl marginY={2}>
                    <FormLabel fontSize={{ base: 11, sm: 12 }}>
                      {data?.items?.footer_middle_first_text?.persian_name}
                    </FormLabel>
                    <Field
                      as={Input}
                      autoComplete=""
                      name="footer_middle_first_text.text"
                      type="text"
                      dir="rtl"
                      variant="outline"
                      fontSize={{ base: 12, sm: 14 }}
                    />
                  </FormControl>
                </Flex>
                <Flex flexDirection="column">
                  <FormControl marginY={2}>
                    <FormLabel fontSize={{ base: 11, sm: 12 }}>
                      {data?.items?.footer_middle_second_text?.persian_name}
                    </FormLabel>
                    <Field
                      as={Input}
                      autoComplete=""
                      name="footer_middle_second_text.text"
                      type="text"
                      dir="rtl"
                      variant="outline"
                      fontSize={{ base: 12, sm: 14 }}
                    />
                  </FormControl>
                </Flex>
                <Flex flexDirection="column">
                  <FormControl marginY={2}>
                    <FormLabel fontSize={{ base: 11, sm: 12 }}>
                      {data?.items?.footer_middle_third_text?.persian_name}
                    </FormLabel>
                    <Field
                      as={Input}
                      autoComplete=""
                      name="footer_middle_third_text.text"
                      type="text"
                      dir="rtl"
                      variant="outline"
                      fontSize={{ base: 12, sm: 14 }}
                    />
                  </FormControl>
                </Flex>
                <Button
                  colorScheme="primary"
                  width="100%"
                  fontSize={{ base: 13, sm: 16 }}
                  marginTop={6}
                  // isDisabled={!isValid || !dirty}
                  onClick={() => setFooterText(values)}
                >
                  ثبت
                </Button>
              </form>
            )}
          </Formik>
        </Flex>
      </Flex>
    </>
  ) : (
    <p>loading ...</p>
  );
};

export default Footer;
