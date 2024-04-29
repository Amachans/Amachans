"use client";
import { apiClient } from "@/lib/util/aspidaClient";
import { useEffect } from "react";
import useAspidaSWR from "@aspida/swr";

export default function Home() {
  const { data } = useAspidaSWR(apiClient.test);
  return <main>{data}</main>;
}
