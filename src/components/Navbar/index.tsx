"use client";

// Modules
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [page, setPage] = useState(-1);

  return (
    <nav className="h-[4rem] w-full border-b-[0.1rem] flex">
      <Link href="/" className="my-auto mx-[1rem] text-lg font-semibold flex-1" onClick={() => setPage(0)}>台灣老子觀</Link>
      <div className="max-lg:hidden  my-auto mx-[1rem] text-lg font-semibold flex-none flex gap-3">
        <Link href="/dao-mai-yuan-liou" className={"hover:opacity-80 " + (page === 0 && "bg-white text-black py-0.5 px-1.5 rounded-sm")} onClick={() => setPage(0)}>道脈源流</Link>
        <Link href="/chen-zih-shih-zon-shih" className={"hover:opacity-80 " + (page === 1 && "bg-white text-black py-0.5 px-1.5 rounded-sm")} onClick={() => setPage(1)}>陳子石宗師</Link>
        <Link href="/li-dai-zu-shih" className={"hover:opacity-80 " + (page === 2 && "bg-white text-black py-0.5 px-1.5 rounded-sm")} onClick={() => setPage(2)}>歷代祖師</Link>
        <Link href="/lu-fong-siou-yang-kan" className={"hover:opacity-80 " + (page === 3 && "bg-white text-black py-0.5 px-1.5 rounded-sm")} onClick={() => setPage(3)}>鑪峰修養刊</Link>
        <Link href="/shih-cih-tu-hua" className={"hover:opacity-80 " + (page === 4 && "bg-white text-black py-0.5 px-1.5 rounded-sm")} onClick={() => setPage(4)}>詩詞圖畫</Link>
        <Link href="/tong-men-shih-suei" className={"hover:opacity-80 " + (page === 5 && "bg-white text-black py-0.5 px-1.5 rounded-sm")} onClick={() => setPage(5)}>同門拾穗</Link>
        <Link href="/sih-chuan-tang-men" className={"hover:opacity-80 " + (page === 6 && "bg-white text-black py-0.5 px-1.5 rounded-sm")} onClick={() => setPage(6)}>四川唐門</Link>
        <Link href="/dan-jing-huei-cuei" className={"hover:opacity-80 " + (page === 7 && "bg-white text-black py-0.5 px-1.5 rounded-sm")} onClick={() => setPage(7)}>丹經彙粹</Link>
        <Link href="/chu-ban-shu-ji" className={"hover:opacity-80 " + (page === 8 && "bg-white text-black py-0.5 px-1.5 rounded-sm")} onClick={() => setPage(8)}>出版書籍</Link>
      </div>
      <div className="lg:hidden my-auto mx-[1rem] text-lg font-semibold flex-none flex gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" className="hover:cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" fill="#fff"></path>
        </svg>
      </div>
      <div className={"absolute h-[100dvh] w-[100dvw] bg-black bg-opacity-95 z-[999999999] " + (!isMenuOpen && "hidden")} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="flex h-[100dvh] w-[100dvw] text-center">
          <div className="my-auto mx-auto flex flex-col gap-5 font-semibold text-xl">
            <Link href="/dao-mai-yuan-liou">道脈源流</Link>
            <Link href="/chen-zih-shih-zon-shih">陳子石宗師</Link>
            <Link href="/li-dai-zu-shih">歷代祖師</Link>
            <Link href="/lu-fong-siou-yang-kan">鑪峰修養刊</Link>
            <Link href="/shih-cih-tu-hua">詩詞圖畫</Link>
            <Link href="/tong-men-shih-suei">同門拾穗</Link>
            <Link href="/sih-chuan-tang-men">四川唐門</Link>
            <Link href="/dan-jing-huei-cuei">丹經彙粹</Link>
            <Link href="/chu-ban-shu-ji">出版書籍</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}