"use client";
import useAspidaSWR from "@aspida/swr";

import { apiClient } from "@/lib/util/apiClient";

export default function Home() {
  const { data } = useAspidaSWR(apiClient.test, {});
  return <main>{data}</main>;
}
