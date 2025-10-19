import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export default function Footer() {
  return (
    <div className="w-full bg-[#2A2A2A] px-8 py-3 text-white">
      <div className="grid grid-cols-2 items-start gap-2">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Image
              src="/PSE-Gradient-Logo-3.webp"
              alt="PSE Logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <h1 className="text-2xl font-semibold text-[#FFC653]">ΠΣΕ</h1>
          </div>
          <p className="text-sm">
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
              <FaInstagram size={22} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/psetg/"
              target="_blank"
              className="transition hover:opacity-80"
            >
              <FaLinkedin size={22} />
            </Link>

            <Link
              href="https://linktr.ee/ucrpse"
              target="_blank"
              className="transition hover:opacity-80"
            >
              <SiLinktree size={22} />
            </Link>
          </div>

          <Link
            href="mailto:pres.pseatucr@gmail.com"
            className="text-sm hover:underline"
          >
            pres.pseatucr@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}
