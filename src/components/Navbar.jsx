import logo from "../assets/prafulLogo.png"; // logo for the landing page from assets
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 items-cente">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl  ">
        <a href="https://www.linkedin.com/in/prafullya-shandilya-10b81a236/?trk=opento_sprofile_details">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Prafullya-Shandilya">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/shandilya1445/">
          <FaInstagram />
        </a>
        <a href="#">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
