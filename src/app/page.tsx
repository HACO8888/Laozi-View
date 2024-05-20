// Modules
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[calc(100dvh-9rem)] w-full pt-[2rem] flex overflow-auto pb-[2rem]">
      <div className="my-auto mx-auto font-extrabold text-2xl flex flex-col gap-[1rem]">
        <Link href="/dao-mai-yuan-liou" className="bg-white text-black py-2 px-2 rounded-lg text-center">道脈源流</Link>
        <Link href="/chen-zih-shih-zon-shih" className="bg-white text-black py-2 px-2 rounded-lg text-center">陳子石宗師</Link>
        <Link href="/li-dai-zu-shih" className="bg-white text-black py-2 px-2 rounded-lg text-center">歷代祖師</Link>
        <Link href="/lu-fong-siou-yang-kan" className="bg-white text-black py-2 px-2 rounded-lg text-center">鑪峰修養刊</Link>
        <Link href="/shih-cih-tu-hua" className="bg-white text-black py-2 px-2 rounded-lg text-center">詩詞圖畫</Link>
        <Link href="/tong-men-shih-suei" className="bg-white text-black py-2 px-2 rounded-lg text-center">同門拾穗</Link>
        <Link href="/sih-chuan-tang-men" className="bg-white text-black py-2 px-2 rounded-lg text-center">四川唐門</Link>
        <Link href="/dan-jing-huei-cuei" className="bg-white text-black py-2 px-2 rounded-lg text-center">丹經彙粹</Link>
        <Link href="/chu-ban-shu-ji" className="bg-white text-black py-2 px-2 rounded-lg text-center">出版書籍</Link>
      </div>
    </div>
  );
}
