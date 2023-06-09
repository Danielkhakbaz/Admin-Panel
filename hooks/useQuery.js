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

const useOneNonFinancialAssistances = (id) => {
  const { getOneNonFinancialAssistances } = useAPI();

  return useQuery(
    ["oneNonFinancialAssistances", id],
    getOneNonFinancialAssistances
  );
};

const useAllNonFinancialAssistances = (page) => {
  const { getAllNonFinancialAssistances } = useAPI();

  return useQuery(
    ["allNonFinancialAssistances", page],
    getAllNonFinancialAssistances
  );
};

const useOneSlider = (id) => {
  const { getOneSlider } = useAPI();

  return useQuery(["oneSlider", id], getOneSlider);
};

const useAllSliders = (page) => {
  const { getAllSliders } = useAPI();

  return useQuery(["allSliders", page], getAllSliders);
};

const useAboutUsText = () => {
  const { getAboutUsText } = useAPI();

  return useQuery(["aboutUsText"], getAboutUsText);
};

const useAllSocialApps = () => {
  const { getAllSocialApps } = useAPI();

  return useQuery(["allSocialApps"], getAllSocialApps);
};

const useOneSocialApps = (id) => {
  const { getOneSocialApps } = useAPI();

  return useQuery(["oneSocialApps", id], getOneSocialApps);
};

const useAllCardInfos = () => {
  const { getAllCardInfos } = useAPI();

  return useQuery(["allCardInfos"], getAllCardInfos);
};

const useOneCardInfos = (id) => {
  const { getOneCardInfos } = useAPI();

  return useQuery(["oneCardInfos", id], getOneCardInfos);
};

export {
  useFooterText,
  useOneFinancialAssistances,
  useAllFinancialAssistances,
  useOneNonFinancialAssistances,
  useAllNonFinancialAssistances,
  useOneSlider,
  useAllSliders,
  useAboutUsText,
  useAllSocialApps,
  useOneSocialApps,
  useAllCardInfos,
  useOneCardInfos,
};
