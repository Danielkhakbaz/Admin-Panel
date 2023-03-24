import { useEffect } from "react";
import { Formik, Field } from "formik";
import {
  Flex,
  Heading,
  Button,
  FormControl,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useAboutUsText } from "hooks/useQuery";
import { useAPI } from "hooks/useApi";

const ContactUs = () => {
  const { data } = useAboutUsText();

  const { updateAboutUsText } = useAPI();

  const toast = useToast();

  useEffect(() => {
    document.title = "تغییر متن ارتباط با ما | پنل داشبورد پروژه ایکس";
  });

  return (
    <>
      <Flex flexDirection="column">
        <Heading fontSize={24} textAlign="center" paddingY={4}>
          تغییر متن ارتباط با ما
        </Heading>
        <Formik
          initialValues={{
            aboutUsText: data?.items?.about_us_text,
          }}
        >
          {({ values, errors, touched, isValid, dirty }) => (
            <form style={{ width: "100%" }}>
              <FormControl
                isRequired
                isInvalid={!!errors.aboutUsText && touched.aboutUsText}
                marginY={2}
              >
                <Field
                  as={Textarea}
                  minHeight="25vh"
                  defaultValue={data?.items?.about_us_text}
                  autoComplete=""
                  name="aboutUsText"
                  type="text"
                  dir="rtl"
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
                onClick={() => {
                  updateAboutUsText(values.aboutUsText)
                    .then(() => {
                      toast({
                        title: "متن با موفقیت ذخیره شد",
                        status: "success",
                        duration: 2000,
                        position: "bottom-left",
                        containerStyle: {
                          fontSize: "14px",
                        },
                      });
                    })
                    .catch(() => {
                      toast({
                        title: "ذخیره متن درباره‌ما با مشکل مواجه شده است",
                        status: "error",
                        duration: 2000,
                        position: "bottom-left",
                        containerStyle: {
                          fontSize: "14px",
                        },
                      });
                    });
                }}
              >
                ثبت
              </Button>
            </form>
          )}
        </Formik>
      </Flex>
    </>
  );
};

export default ContactUs;
