import Link from "next/link";
import Image from "next/image";

export const PagesHeader = () => {
  return (
    <nav className="w-full flex bg-sky-400 justify-between items-center gap-1 lg:px-16 px-6 py-4 fixed top-0 z-50">
      <Link href={"/"}>
        <Image src={"/nic.png"} alt="NIC" width={80} height={80} />
      </Link>

      <Link
        href={"/"}
        className="text-white uppercase font-semibold cursor-pointer rounded-lg hover:bg-lime-400 hover:text-black p-2 text-[15px]"
      >
        Home
      </Link>

      <Link href={"/"}>
        <Image src={"/tisini.png"} alt="Tisini logo" width={150} height={80} />
      </Link>
    </nav>
  );
};
