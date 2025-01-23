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
          className="text-black hover:bg-lime-400 rounded-lg font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer p-2 md:flex"
        >
          Home
        </Link>

        <Link
          href={"/partners"}
          className="text-black hover:bg-lime-400 rounded-lg font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer p-2 md:flex"
        >
          Partners
        </Link>

        <Link
          href={"/gallery"}
          className="text-black hover:bg-lime-400 rounded-lg font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer p-2 md:flex"
        >
          Gallery
        </Link>

        <Link
          href={"/fixtures"}
          className="text-black hover:bg-lime-400 rounded-lg font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer p-2 md:flex"
        >
          2024 Results
        </Link>

        <Link
          href={"/registered-teams"}
          className="text-black hover:bg-lime-400 rounded-lg font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex p-2"
        >
          2025 Teams
        </Link>

        <Link
          href={"/guidelines"}
          className="text-black hover:bg-lime-400 rounded-lg font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer p-2 md:flex"
        >
          2025 Guidelines
        </Link>

        {/* <button className="text-black hover:bg-lime-400 px-4 py-2 rounded-lg font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex">
          <Link href={"/guidelines"}></Link>
        </button> */}

        {/* <RegisterButton /> */}
      </div>
    </nav>
  );
};

export default FixturesHeader;
