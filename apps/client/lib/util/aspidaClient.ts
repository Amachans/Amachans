import axiosClient from "@aspida/axios";
import api from "@/lib/api/$api";

export const apiClient = api(axiosClient());
