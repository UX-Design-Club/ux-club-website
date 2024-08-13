import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export function PrimaryButton({ href, text }: { href: string, text: string }) {

  const transitionLength = 300;

  return (
    <Link
      href={href}
      className={`group relative rounded-full border-2 border-solid border-slate-200 px-4 overflow-hidden duration-${transitionLength}`}
    >
      <div className={`bg-slate-200 w-full h-full absolute rounded-full -translate-x-full top-0 left-0 overflow-hidden transition-transform duration-${transitionLength} group-hover:-translate-x-0`}></div>
      <span className={`relative flex flex-row items-center font-bold uppercase mx-2 transition-color text-slate-200 group-hover:text-slate-800 duration-${transitionLength}`}>
        {text}
      </span>
    </Link>
  );
}
  