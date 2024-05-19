"use client";

// Modules
import { useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <div className="h-[5rem] w-full flex border-t-[0.1rem]">
      <p className="my-auto mx-auto text-lg font-bold">版權所有© <span>{year}</span> 鑪峰學院</p>
    </div>
  );
}