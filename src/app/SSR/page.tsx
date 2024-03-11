import React from "react";
import { TypeData } from "../types/type";

const SSR = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "fact", {
    cache: "no-cache",
  });
  const result: TypeData = await response.json();
  return (
    <div>
      <h4>ssg방식입니다</h4>
      {result.fact}
      <div>매번 경신됨</div>
    </div>
  );
};

export default SSR;
