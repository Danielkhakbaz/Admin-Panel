import React, { useState } from "react";
import {
  Flex,
  Button,
  Heading,
  FormControl,
  Input,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";
import SocialAppsModal from "pages/dashboard/settings/contact-us/card-info/modal/modal";
import { useAllSocialApps } from "hooks/useQuery";
import { MdEdit } from "react-icons/md";

const SocialApps = () => {
  const [singleDataID, setSingleDataID] = useState();

  const { data } = useAllSocialApps();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex flexDirection="column">
        <Heading fontSize={24} textAlign="center" paddingY={4}>
          تغییر متن ارتباط با ما‌ | تغییرات اطلاعات شبکه‌های مجازی
        </Heading>
        {data?.items?.data.map((item) => (
          <React.Fragment key={item.id}>
            <FormControl
              isRequired
              width="100%"
              display="flex"
              justifyContent="space-between"
              flexDirection="row"
              gap={2}
              marginY={4}
            >
              <FormControl>
                <FormLabel fontSize={12}>عنوان:</FormLabel>
                <Input isDisabled value={item.title} />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={12}>عکس:</FormLabel>
                <img src={item.img} alt="" />
              </FormControl>
              <Button
                colorScheme="primary"
                onClick={() => {
                  onOpen();

                  setSingleDataID(item.id);
                }}
              >
                <MdEdit />
              </Button>
            </FormControl>
            <hr />
          </React.Fragment>
        ))}
      </Flex>
      <SocialAppsModal id={singleDataID} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default SocialApps;
