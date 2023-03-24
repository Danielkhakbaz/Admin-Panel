import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Skeleton,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import NonFinancialAssistanceModal from "pages/dashboard/non-financial-assistance/modal/modal";
import { useAPI } from "hooks/useApi";
import { MdDelete } from "react-icons/md";

const thead = [
  { id: "1", title: "نام" },
  { id: "2", title: "شماره موبایل" },
  { id: "3", title: "تاریخ کمک" },
  { id: "4", title: "" },
  { id: "5", title: "" },
];

const NonFinancialAssistanceTable = ({ isLoading, data }) => {
  const [singleDataID, setSingleDataID] = useState();

  const navigate = useNavigate();

  const { deleteOneNonFinancialAssistance } = useAPI();

  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <TableContainer width="100%">
        <Table variant="simple" size="lg">
          <Thead>
            <Tr>
              {thead?.map((item) => (
                <Th
                  key={item.id}
                  fontSize={{ base: 11, sm: 13, lg: 14 }}
                  textAlign="center"
                >
                  <Skeleton isLoaded={isLoading}>{item.title}</Skeleton>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item) => (
              <Tr key={item.id} fontSize={{ base: 10, sm: 11, lg: 12 }}>
                <Td
                  height="90px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                >
                  <Skeleton isLoaded={isLoading}>
                    <b>{item.name}</b>
                  </Skeleton>
                </Td>
                <Td
                  height="90px"
                  fontSize={{ base: 10, sm: 11, lg: 12 }}
                  textAlign="center"
                >
                  <Skeleton isLoaded={isLoading}>
                    <b>{item.phone}</b>
                  </Skeleton>
                </Td>
                <Td
                  height="90px"
                  fontSize={{ base: 10, sm: 11, lg: 12 }}
                  textAlign="center"
                >
                  <Skeleton isLoaded={isLoading}>
                    <b>{item.created_at}</b>
                  </Skeleton>
                </Td>
                <Td
                  height="90px"
                  fontSize={{ base: 10, sm: 11, lg: 12 }}
                  textAlign="center"
                >
                  <Skeleton isLoaded={isLoading}>
                    <Button
                      colorScheme="blue"
                      fontSize={11}
                      onClick={() => {
                        onOpen();
                        setSingleDataID(item.id);
                      }}
                    >
                      مشاهده گزارش
                    </Button>
                  </Skeleton>
                </Td>
                <Td
                  height="90px"
                  fontSize={{ base: 10, sm: 11, lg: 12 }}
                  textAlign="center"
                >
                  <Skeleton isLoaded={isLoading}>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        deleteOneNonFinancialAssistance(item.id)
                          .then(() => {
                            navigate(0);
                          })
                          .catch(() => {
                            toast({
                              title: "حذف با مشکل مواجه شده است",
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
                      <MdDelete />
                    </Button>
                  </Skeleton>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <NonFinancialAssistanceModal
        id={singleDataID}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default NonFinancialAssistanceTable;
