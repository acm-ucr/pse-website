import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/PSE-Gradient-Logo-3.webp";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export default function Footer() {
  return (
    <div className="bg-pse-black-100 w-full px-14 py-8 text-white">
      <div className="grid grid-cols-2 items-center gap-2">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="PSE Logo"
              width={45}
              height={45}
              className="object-contain"
            />
            <p className="text-pse-yellow-100 font-pse-gfs-didot text-5xl font-medium">
              ΠΣΕ
            </p>
          </div>
          <p className="font-pse-gfs-didot text-xl">
            © 2025 Pi Sigma Epsilon — Theta Gamma Chapter
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-2">
            <Link
              href="https://www.instagram.com/ucrpse/"
              target="_blank"
              className="transition hover:opacity-80"
            >
              <FaInstagram size={35} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/psetg/"
              target="_blank"
              className="transition hover:opacity-80"
            >
              <FaLinkedin size={35} />
            </Link>

            <Link
              href="https://linktr.ee/ucrpse"
              target="_blank"
              className="transition hover:opacity-80"
            >
              <SiLinktree size={35} />
            </Link>
          </div>

          <Link
            href="mailto:pres.pseatucr@gmail.com"
            className="font-pse-gfs-didot text-xl hover:underline"
          >
            pres.pseatucr@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}
