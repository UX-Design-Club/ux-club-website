import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaEnvelope, FaInstagram } from "react-icons/fa";
import { GoButton } from "../ui/gobutton";
import { Hero } from "../ui/hero";

export default function Home() {
  return (
    <main>
      <Hero
        imgUrl="/images/team-photo.jpg"
        alignRight
        heading="Connect With Us"
        desc="We're excited to hear from you! Whether you're interested in
                joining our club, looking to collaborate on a project, or just
                want to say hello, we're here to connect with you."
      ></Hero>
      <div className="bg-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-center md:items-start">
              <h3 className="font-bold text-2xl md:text-3xl uppercase py-4">
                Contact Us
              </h3>
              <Image
                src="/images/uxclublogo_d.svg"
                alt="UX Club Logo"
                width={200}
                height={200}
                className="mx-auto md:mx-0"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h3 className="font-bold text-2xl md:text-3xl uppercase py-4">
                Join Our Community
              </h3>
              <p className="mb-4">
                Follow us for updates on events, projects, and opportunities to
                get involved!
              </p>
              <ul className="pl-2 border-l-2 border-teal-500 text-slate-500 text-xl md:text-2xl mb-4">
                <li className="py-2">
                  <Link
                    href="https://www.instagram.com/uxclub.uta/"
                    className="flex items-center gap-4 hover:text-slate-400 transition-colors duration-300"
                  >
                    <FaInstagram className="text-2xl md:text-3xl" />
                    <p className="font-semibold text-base md:text-lg">Instagram</p>
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="https://discord.gg/xhAvcGWRKs"
                    className="flex items-center gap-4 hover:text-slate-400 transition-colors duration-300"
                  >
                    <FaDiscord className="text-2xl md:text-3xl" />
                    <p className="font-semibold text-base md:text-lg">Discord</p>
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="mailto:uxdesignclub.uta@gmail.com"
                    className="flex items-center gap-4 hover:text-slate-400 transition-colors duration-300"
                  >
                    <FaEnvelope className="text-2xl md:text-3xl p-1" />
                    <p className="font-semibold text-base md:text-lg">
                      uxdesignclub.uta@gmail.com
                    </p>
                  </Link>
                </li>
              </ul>
              <h3 className="font-bold text-2xl md:text-3xl uppercase py-4">
                Sponsorship Opportunities
              </h3>
              <p className="mb-4">
                If you're interested in sponsoring our club or supporting our
                initiatives, please contact us via email at{" "}
                <Link
                  href="mailto:uxdesignclub.uta@gmail.com"
                  className="text-teal-500 hover:text-teal-400 transition-colors duration-300"
                >
                  uxdesignclub.uta@gmail.com
                </Link>
              </p>
              <h3 className="font-bold text-2xl md:text-3xl uppercase py-4">
                Become a Member
              </h3>
              <p className="mb-4">
                Interested in becoming a member? Fill out our online form and
                someone from our team will reach out to you shortly.
              </p>
              <div className="flex justify-center md:justify-start">
                <GoButton
                  href="https://forms.gle/pQCUk7XubuwZZsMn7"
                  text="Join Us"
                  dark
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}