import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export function OfficerCard({
  name,
  role,
  pictureURL,
  bio,
}: {
    role: string;
  name: string;
  pictureURL: string;
  bio: string;
}) {
  return (
    <div className="rounded-xl py-8 flex flex-col justify-center items-center content-center max-w-2xl">
      <Image
        className="relative w-1/2 rounded-full mb-6"
        src={pictureURL}
        alt="Profile picture"
        width={360}
        height={360}
      />
      <div className="text-center mb-4">
        <div className="text-emerald-500 font-bold">{name}</div>
        <div className="text-slate-400 font-normal">{role}</div>
      </div>
      <div className="flex flex-row flex-nowrap justify-center gap-6">
        <FaLinkedin className="text-slate-400 hover:text-slate-500 text-lg transition-colors" />
        <FaGithub className="text-slate-400 hover:text-slate-500 text-lg transition-colors" />
        <FaTwitter className="text-slate-400 hover:text-slate-500 text-lg transition-colors" />
      </div>
    </div>
  );
}
