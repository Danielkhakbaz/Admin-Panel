import { useQuery } from "react-query";
import { useAPI } from "hooks/useApi";

const useFooterText = () => {
  const { getFooterText } = useAPI();

  return useQuery(["footerText"], getFooterText);
};
const useAllNonFinancialAssistances = (page) => {
  const { getAllNonFinancialAssistances } = useAPI();

  return useQuery(["allNonFinancialAssistances", page], (page) =>
    getAllNonFinancialAssistances(page)
  );
};
const useAllFinancialAssistances = (page) => {
  const { getAllFinancialAssistances } = useAPI();

  return useQuery(["allFinancialAssistances", page], (page) =>
    getAllFinancialAssistances(page)
  );
};

export {
  useFooterText,
  useAllNonFinancialAssistances,
  useAllFinancialAssistances,
};
