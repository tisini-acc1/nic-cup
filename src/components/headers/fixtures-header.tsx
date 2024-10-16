import Image from "next/image";
import Link from "next/link";
import { RegisterButton } from "../buttons/register-button";

const FixturesHeader = () => {
  return (
    <nav className="w-full h-24 flex bg-sky-400 justify-between items-center gap-1 lg:px-16 px-6  fixed top-0">
      <Link href={"/"}>
        <Image src={"/nic.png"} alt="NIC" width={60} height={60} />
      </Link>

      <div className="flex gap-8 items-center justify-center">
        <Link
          href={"/"}
          className=" text-black uppercase font-semibold cursor-pointer  hover:text-white"
        >
          Home
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

        <RegisterButton />
      </div>
    </nav>
  );
};

export default FixturesHeader;
