import React from "react";
import { TypeData } from "../types/type";

const ISR = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "fact", {
    next: {
      revalidate: 5,
    },
  });
  const result: TypeData = await response.json();
  return (
    <div>
      <h4>isr방식입니다</h4>
      {result.fact}
      <div>5초에 한번 갱신</div>
    </div>
  );
};

export default ISR;
