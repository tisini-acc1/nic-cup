import Link from "next/link";
import Image from "next/image";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer id="contacts" className="py-4 mt-4 bg-black text-white">
      <div className="w-[90%] flex gap-4 flex-col md:flex-row items-center justify-between mx-auto py-4 border-b-2 border-gray-400">
        <div className="">
          <Link className="flex items-center justify-center mb-4" href={"/"}>
            <Image src="/nic.png" alt="logo" width={110} height={100} />
          </Link>

          <div className="flex items-center gap-4 flex-wrap">
            {socials.map((soc) => {
              const IconComponent = soc.icon;

              return (
                <a
                  key={soc.name}
                  href={soc.link}
                  target="_blank"
                  className="py-[5px] px-[10px] text-xl text-primary bg-[#232220] transition duration-300 hover:text-[#ffffff] hover:bg-[#ff581f]"
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>

        <address className="md:pr-8 lg:pr-0 md:px-0 md:text-right">
          <h4 className="mb-4 text-xl font-semibold">Contact Us</h4>

          {contacts.map((contact, index) => {
            const IconComponent = contact.icon;

            return (
              <div
                key={index}
                className="flex md:justify-end gap-4 m-2 text-[#a3a3a3]"
              >
                <div className="py-1 text-xl text-primary">
                  <IconComponent />
                </div>
                <h5 className="">{contact.contact}</h5>
              </div>
            );
          })}
        </address>
      </div>

      <div className="px-4 pt-4 pb-2 text-sm text-center text-[#a3a3a3]">
        Copyright @{date} Nairobi International Cup. All rights reserved.
      </div>
    </footer>
  );
};

const socials = [
  {
    name: "facebook",
    icon: FaFacebook,
    link: "",
  },
  {
    name: "twitter",
    icon: FaXTwitter,
    link: "",
  },
  {
    name: "instagram",
    icon: FaInstagram,
    link: "",
  },
  {
    name: "linkedin",
    icon: FaLinkedinIn,
    link: "",
  },
];

const contacts = [
  { icon: FaPhoneAlt, contact: "+254 719 422235, +254 790 659116" },
  { icon: FaPhoneAlt, contact: "+254 796 726098,  0111 931049" },
  {
    icon: MdEmail,
    contact: "nairobiinternationalcup@gmail.com",
  },
];
