import { useQuery } from "react-query";
import { useAPI } from "hooks/useApi";

const useFooterText = () => {
  const { getFooterText } = useAPI();

  return useQuery(["footerText"], getFooterText);
};

const useOneFinancialAssistances = (id) => {
  const { getOneFinancialAssistances } = useAPI();

  return useQuery(["oneFinancialAssistances", id], getOneFinancialAssistances);
};

const useAllFinancialAssistances = (page) => {
  const { getAllFinancialAssistances } = useAPI();

  return useQuery(
    ["allFinancialAssistances", page],
    getAllFinancialAssistances
  );
};

const useAllNonFinancialAssistances = (page) => {
  const { getAllNonFinancialAssistances } = useAPI();

  return useQuery(
    ["allNonFinancialAssistances", page],
    getAllNonFinancialAssistances
  );
};

export {
  useFooterText,
  useOneFinancialAssistances,
  useAllFinancialAssistances,
  useAllNonFinancialAssistances,
};
