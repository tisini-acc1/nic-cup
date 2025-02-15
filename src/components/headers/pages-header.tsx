import Link from "next/link";
import Image from "next/image";

export const PagesHeader = () => {
  return (
    <nav className="w-full flex bg-sky-400 justify-between items-center gap-1 lg:px-16 px-6  fixed top-0">
      <Link href={"/"}>
        <Image
          src={"/Partially removed BG.png"}
          alt="NIC"
          width={60}
          height={60}
        />
      </Link>

      <Link
        href={"/"}
        className="text-white uppercase font-semibold cursor-pointer rounded-lg hover:bg-lime-400 hover:text-black p-2 text-[15px] md:text-[35px]"
      >
        Nairobi International Cup
      </Link>

      <Link href={"/"}>
        <Image src={"/tisini.png"} alt="Tisini logo" width={150} height={80} />
      </Link>
    </nav>
  );
};
