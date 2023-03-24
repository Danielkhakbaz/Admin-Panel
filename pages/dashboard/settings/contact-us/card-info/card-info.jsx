import { useState } from "react";
import {
  Flex,
  Button,
  Heading,
  FormControl,
  Input,
  Textarea,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";
import CardInfoModal from "pages/dashboard/settings/contact-us/card-info/modal/modal";
import { useAllCardInfos } from "hooks/useQuery";
import { MdEdit } from "react-icons/md";

const CardInfo = () => {
  const [singleDataID, setSingleDataID] = useState();

  const { data } = useAllCardInfos();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex flexDirection="column">
        <Heading fontSize={24} textAlign="center" paddingY={4}>
          تغییر متن ارتباط با ما‌ | تغییرات اطلاعات خیریه
        </Heading>
        {data?.items?.data.map((item) => (
          <>
            <FormControl
              key={item.id}
              isRequired
              width="100%"
              display="flex"
              justifyContent="space-between"
              flexDirection="row"
              gap={2}
              marginY={4}
            >
              <FormControl>
                <FormLabel fontSize={12}>عنوان آدرس:</FormLabel>
                <Input isDisabled value={item.title} />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={12}>شماره تلفن:</FormLabel>
                <Input isDisabled value={item.phone} />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={12}>آدرس:</FormLabel>
                <Textarea isDisabled value={item.address} />
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
          </>
        ))}
      </Flex>
      <CardInfoModal id={singleDataID} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CardInfo;
