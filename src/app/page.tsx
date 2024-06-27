import Image from "next/image";
import Option from "./option";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-[0 0 0 24] p-2 bg-slate-600 ">
      <div className="flex flex-col md:gap-5 gap-4">
        <p className="flex font-extrabold text-center md:text-6xl text-3xl text-amber-400">Puskesmas Tempel 1 ILP Tool</p>
        <Option />
      </div>
    </main>
  );
}
