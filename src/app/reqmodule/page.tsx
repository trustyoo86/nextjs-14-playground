'use client';

import { useEffect } from "react";
import request from "@/utils/request";

export default function ReqmodulePage() {
  const getTest = async () => {
    request('/api/test', null, { retry: true })
      .then((res) => {
        console.log(res)
      });
  };

  useEffect(() => {
    getTest();
  }, []);

  return (<div>req module</div>);
}
