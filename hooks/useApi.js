import axios from "axios";

let accessToken = localStorage.getItem("token");

const API = axios.create({
  baseURL: "http://193.39.9.216/",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const useAPI = () => {
  const loginRequest = async (phoneNumber, password) => {
    return await API.post("/api/auth/login", {
      phone: phoneNumber,
      password,
    });
  };

  const logoutRequest = async (phoneNumber, password) => {
    return await API.post("/api/auth/logout", {
      phone: phoneNumber,
      password,
    });
  };

  const sendVertificationCode = async (phoneNumber) => {
    return await API.post("/api/auth/verification-code", {
      phone: phoneNumber,
    });
  };

  const resetPassword = async (
    phoneNumber,
    verificationCode,
    password,
    passwordConfirmation
  ) => {
    return await API.post("/api/auth/forgot-password", {
      phone: phoneNumber,
      verification_code: verificationCode,
      password,
      password_confirmation: passwordConfirmation,
    });
  };

  const getFooterText = async () => {
    const { data } = await API.get("/api/v1/admin/site-settings", {
      params: {
        key: "site_footer",
      },
    });

    return data;
  };

  const setFooterText = async (values) => {
    return await API.post("/api/v1/admin/site-settings", {
      key: "site_footer",
      values,
    });
  };

  const getOneFinancialAssistances = async (id) => {
    if (id.queryKey[1]) {
      const { data } = await API.get(
        `/api/v1/admin/payments/${id.queryKey[1]}`
      );
      return data;
    }
  };

  const deleteOneFinancialAssistance = async (id) => {
    return API.delete(`/api/v1/admin/payments/${id}`);
  };

  const getAllFinancialAssistances = async (page) => {
    const { data } = await API.get(
      `/api/v1/admin/payments?page=${page.queryKey[1]}`
    );

    return data;
  };

  const getOneNonFinancialAssistances = async (id) => {
    if (id.queryKey[1]) {
      const { data } = await API.get(
        `/api/v1/admin/non-financial-assistance/${id.queryKey[1]}`
      );
      return data;
    }
  };

  const deleteOneNonFinancialAssistance = async (id) => {
    return API.delete(`/api/v1/admin/non-financial-assistance/${id}`);
  };

  const getAllNonFinancialAssistances = async (page) => {
    const { data } = await API.get(
      `/api/v1/admin/non-financial-assistance?page=${page.queryKey[1]}`
    );

    return data;
  };

  const getOneSlider = async (id) => {
    const { data } = await API.get(`/api/v1/admin/sliders/${id}`);

    return data;
  };

  const getAllSliders = async () => {
    const { data } = await API.get("/api/v1/admin/sliders");

    return data;
  };

  const getAboutUsText = async () => {
    const { data } = await API.get(
      "/api/v1/admin/site-settings?key=site_about_us"
    );

    return data;
  };

  const updateAboutUsText = async (AboutUsText) => {
    return await API.post("/api/v1/admin/site-settings", {
      key: "site_about_us",
      about_us_text: AboutUsText,
    });
  };

  const getAllSocialApps = async () => {
    const { data } = await API.get("/api/v1/admin/contact-us/social-apps");

    return data;
  };

  const getOneSocialApps = async (id) => {
    const { data } = await API.get(
      `/api/v1/admin/contact-us/social-apps/${id}`
    );

    return data;
  };

  const getAllCardInfos = async () => {
    const { data } = await API.get("/api/v1/admin/contact-us/cards-infos");

    return data;
  };

  const getOneCardInfos = async (id) => {
    const { data } = await API.get(
      `/api/v1/admin/contact-us/cards-infos/${id.queryKey[1]}`
    );

    return data;
  };

  return {
    loginRequest,
    logoutRequest,
    sendVertificationCode,
    resetPassword,
    getFooterText,
    setFooterText,
    getOneFinancialAssistances,
    deleteOneFinancialAssistance,
    getAllFinancialAssistances,
    getOneNonFinancialAssistances,
    deleteOneNonFinancialAssistance,
    getAllNonFinancialAssistances,
    getOneSlider,
    getAllSliders,
    getAboutUsText,
    updateAboutUsText,
    getAllSocialApps,
    getOneSocialApps,
    getAllCardInfos,
    getOneCardInfos,
  };
};
