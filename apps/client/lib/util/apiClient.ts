import aspida from "@aspida/axios";
import axios from "axios";

import api from "@/api/$api";
import mock from "@/api/$mock";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const isLocal = process.env.NODE_ENV == "development";

export const apiClient = isLocal
  ? mock(aspida(), { delayMSec: 500 })
  : api(aspida(axios, { baseURL }));
