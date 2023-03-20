import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Skeleton,
  Button,
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
import CustomModal from "components/modal/modal";
import { useAPI } from "hooks/useApi";
import { MdDelete } from "react-icons/md";

const thead = [
  { id: "1", title: "نام موسسه" },
  { id: "2", title: "زمان پرداخت" },
  { id: "3", title: "مقدار کمک" },
  { id: "4", title: "" },
  { id: "5", title: "" },
];

const FinancialAssistanceTable = ({ isLoading, data }) => {
  const [singleDataID, setSingleDataID] = useState();

  const navigate = useNavigate();

  const { deleteOneFinancialAssistance } = useAPI();

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
                    <b>{item.institute_name}</b>
                  </Skeleton>
                </Td>
                <Td
                  height="90px"
                  fontSize={{ base: 10, sm: 11, lg: 12 }}
                  textAlign="center"
                >
                  <Skeleton isLoaded={isLoading}>
                    <b>{item.paid_at}</b>
                  </Skeleton>
                </Td>
                <Td
                  height="90px"
                  fontSize={{ base: 10, sm: 11, lg: 12 }}
                  textAlign="center"
                >
                  <Skeleton isLoaded={isLoading}>
                    <b>{item.amount.toLocaleString("fa")} ریال</b>
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
                        deleteOneFinancialAssistance(item.id)
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
      <CustomModal id={singleDataID} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default FinancialAssistanceTable;
