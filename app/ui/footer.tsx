import Link from "next/link";
import { FaDiscord, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <div className="bg-gradient-to-tr from-teal-700 to-teal-500 pb-4 text-white">
      <div className="lg:max-w-7xl mx-auto py-8 px-4">
        <ul className="flex flex-col md:flex-row justify-center items-center gap-10 uppercase my-4">
          <li>
            <Link className="hover:border-b-white py-1 border-2 border-transparent transition-all" href={"/"}>Home</Link>
          </li>
          <li>
            <Link className="hover:border-b-white py-1 border-2 border-transparent transition-all"  href={"/about"}>About</Link>
          </li>
          <li>
            <Link className="hover:border-b-white py-1 border-2 border-transparent transition-all"  href={"/events"}>Upcoming Events</Link>
          </li>
          <li>
            <Link className="hover:border-b-white py-1 border-2 border-transparent transition-all"  href={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link className="hover:border-b-white py-1 border-2 border-transparent transition-all"  href={"/members"}>Members</Link>
          </li>
        </ul>
        <div className="flex flex-row justify-center gap-6 my-4 text-2xl mx-auto">
          <Link href={"/"} className="hover:text-gray-300 transition-colors">
            <FaDiscord />
          </Link>
          <Link href={"/"} className="hover:text-gray-300 transition-colors">
            <FaInstagram />
          </Link>
        </div>
        <p className="my-4 text-sm text-center">&copy; 2024 UX Design Club at UTA</p>
      </div>
    </div>
  );
}
