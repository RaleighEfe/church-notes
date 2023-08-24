import Link from "next/link";
import Logo from "../atoms/Logo";
import { BsLinkedin, BsGithub, BsMedium, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="grid gap-3 text-white p-3 bg-[#4f7942]">
      <div className="grid gap-5 md:justify-self-center">
        {/* <div className="text-2xl font-bold">Book Closet</div> */}
        <div className="justify-self-start md:justify-self-center">
          <Logo className="text-2xl" />
        </div>
        <div className="flex gap-5 justify-self-start md:justify-self-end">
          <Link href="https://twitter.com/EfeRaleigh">
            <BsTwitter />
          </Link>

          <Link href="https://medium.com/@raleighefe">
            <BsMedium />
          </Link>

          <Link href="https://www.linkedin.com/in/efe-raleigh-674b8723b/">
            <BsLinkedin />
          </Link>

          <Link href="https://github.com/RaleighEfe">
            <BsGithub />
          </Link>
        </div>
      </div>
      <div className="justify-between md:justify-self-center flex gap-3 text-sm">
        <Link href="">Terms of Service</Link>
        <Link href="">Privacy Policy</Link>
        <Link href="">Security</Link>
      </div>
    </footer>
  );
};

export default Footer;
