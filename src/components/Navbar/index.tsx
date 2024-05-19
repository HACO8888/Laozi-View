// Modules
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-[4rem] w-full border-b-[0.1rem] flex">
      <Link href="/" className="my-auto mx-[1rem] text-lg font-semibold flex-1">台灣老子觀</Link>
      <div className="max-lg:hidden  my-auto mx-[1rem] text-lg font-semibold flex-none flex gap-3">
        <Link href="/dao-mai-yuan-liou">道脈源流</Link>
        <Link href="/chen-zih-shih-zon-shih">陳子石宗師</Link>
        <Link href="/">歷代祖師</Link>
        <Link href="/lu-fong-siou-yang-kan">鑪峰修養刊</Link>
        <Link href="/shih-cih-tu-hua">詩詞圖畫</Link>
        <Link href="/">同門拾穗</Link>
        <Link href="/">四川唐門</Link>
        <Link href="/">丹經彙粹</Link>
        <Link href="/">出版書籍</Link>
      </div>
    </nav>
  );
}