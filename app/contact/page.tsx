import { Hero } from "../ui/hero";
import Image from "next/image";
import { GoButton } from "../ui/gobutton";
import Link from "next/link";
import { FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa6";

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
      <div className="bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-row pb-32">
            <div className="w-1/2">
              <h3 className="font-bold text-3xl uppercase py-8">
                Contact Us
              </h3>
              <Image src={""} alt="" width={512} height={512} />
            </div>
            <div className="w-1/2">
              <h3 className="font-bold text-3xl uppercase py-8">
                Join Our Community
              </h3>
              <p>
                Follow us for updates on events, projects, and opportunities to
                get involved!
              </p>
              <ul className="ml-2 pl-2 border-l-2 border-teal-500 border-solid flex flex-col text-slate-500 text-3xl m-4">
                <li className="py-2">
                  <Link
                    href="https://www.instagram.com/uxclub.uta/"
                    className="flex flex-row gap-4 items-center hover:text-slate-400 transition-colors duration-100"
                  >
                    <FaInstagram />
                    <p className="font-semibold text-base">Instagram</p>
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="https://discord.gg/xhAvcGWRKs"
                    className="flex flex-row gap-4 items-center hover:text-slate-400 transition-colors duration-100"
                  >
                    <FaDiscord />
                    <p className="font-semibold text-base">Discord</p>
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="mailto:uxdesignclub.uta@gmail.com"
                    className="flex flex-row gap-4 items-center hover:text-slate-400 transition-colors duration-100"
                  >
                    <FaEnvelope className="p-1"/>
                    <p className="font-semibold text-base">
                      uxdesignclub.uta@gmail.com
                    </p>
                  </Link>
                </li>
              </ul>
              <h3 className="font-bold text-3xl uppercase py-8">
                Sponsorship Opportunities
              </h3>
              <p>
                If you're interested in sponsoring our club or supporting our
                initiatives, please contact us via email at{" "}
                <Link
                  href="mailto:uxdesignclub.uta@gmail.com"
                  className="text-teal-500 hover:text-teal-400 transition-colors duration-100"
                >
                  uxdesignclub.uta@gmail.com
                </Link>
              </p>
              <h3 className="font-bold text-3xl uppercase py-8">
                Become a Member
              </h3>
              <p>
                Interested in becoming a member? Fill out our online form and
                someone from our team will reach out to you shortly.
              </p>
              <div className="flex flex-row m-8">
                <GoButton
                  href="https://forms.gle/W5A4eWQbsXsuRurt8"
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
