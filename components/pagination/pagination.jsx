import { Flex, Tooltip, Button, useColorMode } from "@chakra-ui/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const Pagination = ({ total, itemsPerPage, currentPage, setCurrentPage }) => {
  const { colorMode } = useColorMode();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers?.length !== 0 && pageNumbers?.length !== 1 && (
        <Flex
          width="100%"
          flexDirection="row-reverse"
          justifyContent="center"
          alignItems="center"
          gap={3}
          paddingBottom={4}
        >
          {pageNumbers?.length !== 2 && (
            <Tooltip
              label="صفحۀ اول"
              placement="left"
              fontSize={10}
              backgroundColor="primary.800"
            >
              <Button
                size="sm"
                isDisabled={currentPage === 1 || currentPage === 2}
                onClick={() => setCurrentPage(1)}
              >
                <AiOutlineDoubleLeft />
              </Button>
            </Tooltip>
          )}
          <Tooltip label="صفحۀ قبل" fontSize={10} backgroundColor="primary.800">
            <Button
              size="sm"
              isDisabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <MdKeyboardArrowLeft />
            </Button>
          </Tooltip>
          {pageNumbers?.map((item) => (
            <Button
              key={item}
              size="sm"
              color={
                colorMode === "light"
                  ? currentPage === item
                    ? "white"
                    : "black"
                  : "white"
              }
              colorScheme={currentPage === item ? "primary" : "gray"}
              onClick={() => setCurrentPage(item)}
            >
              {item.toLocaleString("fa")}
            </Button>
          ))}
          <Tooltip label="صفحۀ بعد" fontSize={10} backgroundColor="primary.800">
            <Button
              size="sm"
              isDisabled={currentPage === pageNumbers[pageNumbers.length - 1]}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <MdKeyboardArrowRight />
            </Button>
          </Tooltip>
          {pageNumbers.length !== 2 && (
            <Tooltip
              label="صفحۀ آخر"
              placement="right"
              fontSize={10}
              backgroundColor="primary.800"
            >
              <Button
                size="sm"
                isDisabled={
                  currentPage === pageNumbers[pageNumbers.length - 1] ||
                  currentPage === pageNumbers[pageNumbers.length - 1] - 1
                }
                onClick={() =>
                  setCurrentPage(pageNumbers[pageNumbers.length - 1])
                }
              >
                <AiOutlineDoubleRight />
              </Button>
            </Tooltip>
          )}
        </Flex>
      )}
    </>
  );
};

export default Pagination;
