import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <div className="bg-gunmetal-800 pb-4 text-gray-500">
      <div className="lg:max-w-5xl mx-auto pt-16 px-4">
        <div className="flex flex-col lg:flex-row border-b border-gray-600">
          <div className="lg:w-2/5">
            <Image
              src="/images/uxclublogo.svg"
              alt="UX Club Logo"
              width={50}
              height={50}
              priority
              className="mb-4 opacity-45"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis libero mi. Aliquam cursus mattis purus, quis tincidunt urna
              faucibus eget. Nullam mattis nunc eu massa suscipit laoreet.
              Curabitur at ligula varius, lobortis risus quis, finibus velit.
            </p>
            <div className="flex flex-row gap-6 my-4 text-2xl">
              <Link href={"/"} className="hover:text-gray-300 transition-colors">
                <FaDiscord />
              </Link>
              <Link href={"/"} className="hover:text-gray-300 transition-colors">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
        <p className="my-4">&copy; 2024 UX Design Club at UTA</p>
      </div>
    </div>
  );
}
