import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="p-3 shadow-md flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center ">
        <Image
          alt="SmartBytesLab"
          height={60}
          width={60}
          src={"/Logo.png"}
          className="mx-auto sm:mx-0"
        />
      </div>
      <nav className="mt-2 sm:mt-0">
        <ul className="flex items-center gap-3 font-[500] text-sm sm:textbase">
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
    </header>
  );
};

export default Navbar;
