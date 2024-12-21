import Image from "next/image";
import Link from "next/link";
import { RegisterButton } from "../buttons/register-button";

const FixturesHeader = () => {
  return (
    <nav className="w-full h-24 flex bg-sky-400 justify-between items-center gap-1 lg:px-16 px-6 z-50 fixed top-0">
      <Link href={"/"}>
        <Image
          src={"/Partially removed BG.png"}
          alt="NIC"
          width={60}
          height={60}
        />
      </Link>

      <div className="flex gap-8 items-center justify-center">
        <Link
          href={"/"}
          className=" text-black uppercase font-semibold cursor-pointer  hover:text-white"
        >
          Home
        </Link>

        <Link
          href={"/partners"}
          className="hidden md:inline-block text-black uppercase font-semibold cursor-pointer  hover:text-white"
        >
          Partners
        </Link>

        <Link
          href={"/gallery"}
          className="hidden md:inline-block text-black uppercase font-semibold cursor-pointer  hover:text-white"
        >
          Gallery
        </Link>
        <Link
          href={"/fixtures"}
          className="hidden md:inline-block text-black uppercase font-semibold cursor-pointer  hover:text-white"
        >
          2024 Results
        </Link>

        <button className="text-black hover:bg-lime-400 px-4 py-2 border rounded-lg font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex">
          <Link href={"/guidelines"}>2025 Guidelines</Link>
        </button>

        <RegisterButton />
      </div>
    </nav>
  );
};

export default FixturesHeader;
