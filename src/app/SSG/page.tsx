import React from "react";
import { TypeData } from "../types/type";

const SSG = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "fact");
  const result: TypeData = await response.json();
  return (
    <div>
      <h4>ssg방식입니다</h4>
      {result.fact}
      <div>새로고침해도 동일</div>
    </div>
  );
};

export default SSG;
