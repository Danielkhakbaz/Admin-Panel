import { useState, useEffect } from "react";
import {
  Skeleton,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

const thead = [
  { title: "نام موسسه" },
  { title: "زمان پرداخت" },
  { title: "مقدار کمک" },
  { title: "" },
];

const NonFinancialAssistanceTable = ({ data }) => {
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(true);
    }, 150);
  }, []);

  return (
    <>
      <TableContainer width="100%">
        <Table variant="simple" size="lg">
          <Thead>
            <Tr>
              {thead?.map((item) => (
                <Th
                  key={item.title}
                  fontSize={{ base: 11, sm: 13, lg: 14 }}
                  textAlign="center"
                >
                  <Skeleton isLoaded={loadingState}>{item.title}</Skeleton>
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
                  <Skeleton
                    isLoaded={loadingState}
                    onClick={() => console.log(item)}
                  >
                    {item.institute_name}
                  </Skeleton>
                </Td>
                <Td
                  height="90px"
                  fontSize={{ base: 10, sm: 11, lg: 12 }}
                  textAlign="center"
                >
                  <Skeleton isLoaded={loadingState}>{item.paid_at}</Skeleton>
                </Td>
                <Td
                  height="90px"
                  fontSize={{ base: 10, sm: 11, lg: 12 }}
                  textAlign="center"
                >
                  <Skeleton isLoaded={loadingState}>
                    <b>{item.amount.toLocaleString("fa")} ریال</b>
                  </Skeleton>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default NonFinancialAssistanceTable;
