import {
  Facebook,
  Instagram,
  Linkedin,
  LinkedinIcon,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-3 border-t">
      <Image
        alt="SmartByteLabs"
        height={100}
        width={300}
        src={"/Logo2.jpeg"}
        className="mx-auto sm:mx-0"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <nav className="p-3">
          <ul className="flex flex-col items-center  gap-3 font-[500] ">
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/technologies"}>Technologies</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/services"}>Services</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className="p-3">
          <ul className="flex flex-col items-center  gap-3 font-[500] ">
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/"}>Web development</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/about"}>App development</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/technologies"}>Ui/Ux designing</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/services"}>Iot development</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/contact"}>AR/VR Tech</Link>
            </li>
          </ul>
        </nav>
        <nav className="p-3">
          <ul className="flex flex-col items-center  gap-3 font-[500] ">
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/"}>PPC ads</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/about"}>Digital Marketing</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/technologies"}>Branding</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/services"}>Campaigns</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/contact"}>SEO</Link>
            </li>
          </ul>
        </nav>
        <nav className="p-3">
          <ul className="flex flex-col items-center  gap-3 font-[500] ">
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/"}>Team</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/about"}>Career</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/technologies"}>Blogs</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/services"}>Products</Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/contact"}>QA</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 mb-3">
        <nav className="px-3 mb-1">
          <ul className="flex  items-center  gap-2 font-[500] ">
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/"}>
                <LinkedinIcon className="h-5 w-5 text-slate-600 hover:text-[var(--LightPurple)] cursor-pointer transition-all" />
              </Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/about"}>
                <Twitter className="h-5 w-5 text-slate-600 hover:text-[var(--LightPurple)] cursor-pointer transition-all" />
              </Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/technologies"}>
                <Instagram className="h-5 w-5 text-slate-600 hover:text-[var(--LightPurple)] cursor-pointer transition-all" />
              </Link>
            </li>
            <li className="hover:text-[var(--LightPurple)] transition-all  cursor-pointer">
              <Link href={"/services"}>
                <Facebook className="h-5 w-5 text-slate-600 hover:text-[var(--LightPurple)] cursor-pointer transition-all" />
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-center text-xs">
          ©{new Date().getFullYear()} SmartByteLabs . All rights reserved |
          <span className="hover:text-[var(--LightPurple)] transition-all cursor-pointer">
            <Link href={"terms-of-services"}>Terms of Service </Link>{" "}
          </span>
          |
          <span className="hover:text-[var(--LightPurple)] transition-all cursor-pointer">
            {" "}
            <Link href={"privacy-policy"}>Privacy Policy</Link>{" "}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
