import axios from "axios";
import { ApiResult, iTuneResult } from "../interfaces";
const iTuneEndpoint: string = process.env.ITUNE_ENDPOINT as string;
const apiEndpoint: string = process.env.API_ENDPOINT as string;

const iTuneOpts = {
  withCredentials: true,
  headers: {
    "Content-Type": "text/xml",
    "Access-Control-Allow-Origin": "*",
    mode: "cors",
    credentials: "include",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};
const iTuneGet = async (queryString: string) => {
  return axios.get<iTuneResult>(`${iTuneEndpoint}${queryString}`, iTuneOpts);
};
const get = async <T = any>(url: string, opts?: any) => {
  return axios.get<ApiResult<T>>(`${apiEndpoint}${url}`, opts);
};
const post = async <T = any>(url: string, data?: any, opts?: any) => {
  return axios.post<ApiResult<T>>(`${apiEndpoint}${url}`, data, opts);
};

const loadArtistFromFile = async (filePath: string, opts?: any) => {
  return axios.get("./artists.json");
};

export default { post, get,  iTuneGet, loadArtistFromFile } as const;
