import Image from "next/image";
import Link from "next/link";
import logo from "@/public/PSE-Gradient-Logo-3.webp";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export default function Footer() {
  return (
    <div className="bg-pse-black-100 w-full p-8 text-white">
      <div className="grid grid-cols-2 items-start gap-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="PSE Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <p className="text-pse-yellow-100 text-2xl font-semibold">ΠΣΕ</p>
          </div>
          <p className="text-md">
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
              <FaInstagram size={24} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/psetg/"
              target="_blank"
              className="transition hover:opacity-80"
            >
              <FaLinkedin size={24} />
            </Link>

            <Link
              href="https://linktr.ee/ucrpse"
              target="_blank"
              className="transition hover:opacity-80"
            >
              <SiLinktree size={24} />
            </Link>
          </div>

          <Link
            href="mailto:pres.pseatucr@gmail.com"
            className="text-md hover:underline"
          >
            pres.pseatucr@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}
