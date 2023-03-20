import { useState } from "react";
import { Flex, Heading, Skeleton } from "@chakra-ui/react";
import NonFinancialAssistanceTable from "pages/dashboard/non-financial-assistance/table/table";
import { useAllNonFinancialAssistances } from "hooks/useQuery";
import Pagination from "components/pagination/pagination";

const NonFinancialAssistance = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useAllNonFinancialAssistances(currentPage);

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        gap={4}
      >
        <Skeleton isLoaded={!isLoading}>
          <Heading
            fontSize={{ base: 20, sm: 26, md: 32 }}
            paddingY={{ base: 1, sm: 2.5, md: 4 }}
          >
            لیست کمک‌های غیرنقدی
          </Heading>
        </Skeleton>
        <NonFinancialAssistanceTable
          isLoading={!isLoading}
          data={data?.items?.data}
        />
        <Pagination
          total={data?.items?.total}
          itemsPerPage={data?.items?.per_page}
          currentPage={data?.items?.current_page}
          setCurrentPage={setCurrentPage}
        />
      </Flex>
    </>
  );
};

export default NonFinancialAssistance;
