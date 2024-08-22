import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

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
    <div className="flex flex-col justify-center items-center max-w-xs mx-auto p-4">
      <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden">
        <Image
          src={pictureURL}
          alt={`${name}'s profile picture`}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="text-center mb-4">
        <div className="text-teal-600 font-bold text-xl">{name}</div>
        <div className="text-slate-800 font-normal text-xl">{role}</div>
      </div>
      <p className="text-center text-slate-600 mb-4">{bio}</p>
      <div className="flex flex-row flex-nowrap justify-center gap-6">
        <a href={`https://linkedin.com/in/${name}`} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-slate-400 hover:text-slate-500 text-lg transition-colors" />
        </a>
        <a href={`https://github.com/${name}`} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-slate-400 hover:text-slate-500 text-lg transition-colors" />
        </a>
        <a href={`https://twitter.com/${name}`} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-slate-400 hover:text-slate-500 text-lg transition-colors" />
        </a>
        <a href={`mailto:${name}@example.com`} target="_blank" rel="noopener noreferrer">
          <GrMail className="text-slate-400 hover:text-slate-500 text-lg transition-colors" />
        </a>
      </div>
    </div>
  );
}
