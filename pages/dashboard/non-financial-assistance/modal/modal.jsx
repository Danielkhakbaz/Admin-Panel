import {
  Flex,
  Button,
  Text,
  Badge,
  Skeleton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useOneNonFinancialAssistances } from "hooks/useQuery";

const NonFinancialAssistanceModal = ({ id, isOpen, onClose }) => {
  const { data, isLoading } = useOneNonFinancialAssistances(id);

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(15px)" />
        <ModalContent>
          <Flex
            width="100%"
            flexDirection="column-reverse"
            justifyContent="flex-end"
            alignItems="center"
          >
            <ModalHeader fontSize={18}>
              <Skeleton isLoaded={!isLoading}>مشاهده گزارش</Skeleton>
            </ModalHeader>
            <ModalCloseButton />
          </Flex>
          <ModalBody>
            <Flex>
              <Flex
                width="100%"
                flexDirection="column"
                gap={4}
                border="1px"
                borderColor="gray.300"
                borderRadius={3}
                marginY={8}
                padding={3}
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <Skeleton isLoaded={!isLoading}>
                    <Text fontSize={14}>نام:</Text>
                  </Skeleton>
                  <Skeleton minWidth="50px" isLoaded={!isLoading}>
                    <Badge
                      colorScheme="blackAlpha"
                      fontSize={13}
                      borderRadius={4}
                      padding={1}
                    >
                      {data?.["nonFinancial assistance"]?.name}
                    </Badge>
                  </Skeleton>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Skeleton isLoaded={!isLoading}>
                    <Text fontSize={14}>شماره موبایل:</Text>
                  </Skeleton>
                  <Skeleton minWidth="50px" isLoaded={!isLoading}>
                    <Badge
                      colorScheme="blackAlpha"
                      fontSize={13}
                      borderRadius={4}
                      padding={1}
                    >
                      {data?.["nonFinancial assistance"]?.phone}
                    </Badge>
                  </Skeleton>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Skeleton isLoaded={!isLoading}>
                    <Text fontSize={14}>تاریخ کمک:</Text>
                  </Skeleton>
                  <Skeleton minWidth="50px" isLoaded={!isLoading}>
                    <Badge
                      colorScheme="blackAlpha"
                      fontSize={13}
                      borderRadius={4}
                      padding={1}
                    >
                      {data?.["nonFinancial assistance"]?.created_at}
                    </Badge>
                  </Skeleton>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter width="100%" justifyContent="space-between">
            <Button colorScheme="red" fontSize={13} onClick={onClose}>
              بستن
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NonFinancialAssistanceModal;
