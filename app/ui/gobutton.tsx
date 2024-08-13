import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export function GoButton({
  href,
  text,
  dark,
}: {
  href: string;
  text: string;
  dark?: boolean;
}) {
  const transitionLength = 300;

  return (
    <Link
      href={href}
      className={`${dark ? "text-teal-500" : "text-white" } group relative rounded-full border-2 border-solid border-teal-500 px-4 hover:border-teal-300 overflow-hidden duration-${transitionLength}`}
    >
      <div
        className={`bg-teal-500 w-full h-full absolute rounded-full -translate-x-full top-0 left-0 overflow-hidden transition-all duration-${transitionLength} group-hover:bg-teal-300 group-hover:-translate-x-0`}
      ></div>
      <span
        className={`relative flex flex-row items-center font-bold uppercase mx-2 translate-x-0 group-hover:translate-x-3 transition-all duration-${transitionLength} group-hover:text-slate-800`}
      >
        {text}
        <FaArrowRight
          className={`ml-2 text-base transform transition-transform duration-${transitionLength} group-hover:translate-x-16`}
        />
      </span>
    </Link>
  );
}
