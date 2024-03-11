"use client";
import React, { useEffect, useState } from "react";
import { TypeData } from "../types/type";

const CSR = () => {
  const [data, setData] = useState<TypeData | null>(null);
  const fetchData = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "fact");
    const result: TypeData = await response.json();
    setData(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (!data) {
    return <div>loading.....!!!!</div>;
  }
  return (
    <div>
      CSR방식입니다
      {data?.fact}
      <div>요청을 보낼때 마다 지속해서 갱신</div>
    </div>
  );
};

export default CSR;
