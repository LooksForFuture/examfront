import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store";

const REACT_APP_DOMAIN = process.env.REACT_APP_DOMAIN;

export const useAPI = () => {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.access);
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const _call = async (url: string) => {
    const response = await fetch(url, {
      headers: headers,
    });

    if (!response.ok) {
      // redirect to login if not authenticated
      if (response.status === 401) {
        navigate("/login");
      }
      const errorData = await response.json();
      throw new Error(errorData.detail || "Failed");
    }

    return response.json();
  };

  const userList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/user/`);
    return response;
  };

  const groupList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/group/`);
    return response;
  };

  const accessInterfaceList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/access-interface/`);
    return response;
  };

  const accessInterfaceDetail = async (id: string) => {
    const response = await _call(
      `${REACT_APP_DOMAIN}/api/access-interface/${id}/`
    );
    return response;
  };

  const componentList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/component/`);
    return response;
  };

  const componentDetail = async (id: string) => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/component/${id}/`);
    return response;
  };

  const controlList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/control/`);
    return response;
  };

  const controlDetail = async (id: string) => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/control/${id}/`);
    return response;
  };

  const dataList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/data/`);
    return response;
  };

  const dataDetail = async (id: string) => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/data/${id}/`);
    return response;
  };

  const documentList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/document/`);
    return response;
  };

  const documentDetail = async (id: string) => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/document/${id}/`);
    return response;
  };

  const followupList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/followup/`);
    return response;
  };

  const followupDetail = async (id: string) => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/followup/${id}/`);
    return response;
  };

  const ipAddressList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/ip-address/`);
    return response;
  };

  const ipAddressDetail = async (id: string) => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/ip-address/${id}/`);
    return response;
  };

  const kpiList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/kpi/`);
    return response;
  };

  const kpiDetail = async (id: string) => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/kpi/${id}/`);
    return response;
  };

  const productList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/product/`);
    return response;
  };

  const productDetail = async (id: string) => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/product/${id}/`);
    return response;
  };

  const riskAssessmentList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/risk-assessment/`);
    return response;
  };

  const riskAssessmentDetail = async (id: string) => {
    const response = await _call(
      `${REACT_APP_DOMAIN}/api/risk-assessment/${id}/`
    );
    return response;
  };

  const serverList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/server/`);
    return response;
  };

  const serverDetail = async (id: string) => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/server/${id}/`);
    return response;
  };

  const softwareList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/software/`);
    return response;
  };

  const softwareDetail = async (id: string) => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/software/${id}/`);
    return response;
  };

  const vulnerabilityList = async () => {
    const response = await _call(`${REACT_APP_DOMAIN}/api/vulnerability/`);
    return response;
  };

  const vulnerabilityDetail = async (id: string) => {
    const response = await _call(
      `${REACT_APP_DOMAIN}/api/vulnerability/${id}/`
    );
    return response;
  };

  return {
    userList,
    groupList,
    accessInterfaceList,
    accessInterfaceDetail,
    componentList,
    componentDetail,
    controlList,
    controlDetail,
    dataList,
    dataDetail,
    documentList,
    documentDetail,
    followupList,
    followupDetail,
    ipAddressList,
    ipAddressDetail,
    kpiList,
    kpiDetail,
    productList,
    productDetail,
    riskAssessmentList,
    riskAssessmentDetail,
    serverList,
    serverDetail,
    softwareList,
    softwareDetail,
    vulnerabilityList,
    vulnerabilityDetail,
  };
};
