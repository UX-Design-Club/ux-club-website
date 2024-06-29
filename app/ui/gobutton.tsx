import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export function GoButton({ href, text }: { href: string, text: string }) {

  const transitionLength = 300;

  return (
    <Link
      href={href}
      className={`group relative rounded-full border-2 border-solid border-teal-700 px-4 hover:border-teal-500 overflow-hidden duration-${transitionLength}`}
    >
      <div className={`bg-teal-700 w-full h-full absolute rounded-full -translate-x-full top-0 left-0 overflow-hidden transition-all duration-${transitionLength} group-hover:bg-teal-500 group-hover:-translate-x-0`}></div>
      <span className={`relative flex flex-row items-center font-bold uppercase mx-2 translate-x-0 group-hover:translate-x-3 transition-transform duration-${transitionLength}`}>
        {text}
        <FaArrowRight className={`ml-2 text-base transform transition-transform duration-${transitionLength} group-hover:translate-x-16`} />
      </span>
    </Link>
  );
}
  