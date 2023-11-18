import {
  MdOutlineKeyboardDoubleArrowUp,
  MdOutlineMailOutline,
} from "react-icons/md";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-primary-gray4 text-white">
      <div className="max-c p-x py-14 flexCenterCol gap-8">
        <a href="#hero" className="flexCenterCol font-semibold p3 gap-1">
          <MdOutlineKeyboardDoubleArrowUp className="h3" />
          BACK TO TOP
        </a>
        <div className=" flexCenter gap-5 h2">
          <a
            href="https://www.facebook.com/profile.php?id=100082322907007"
            target="_blank"
            className=" hover:scale-125 duration-300 ease-in-out">
            <AiOutlineFacebook />
          </a>
          <a
            href="https://www.instagram.com/assemned/"
            target="_blank"
            className=" hover:scale-125 duration-300 ease-in-out">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/assem-ned-b77494297/"
            target="_blank"
            className=" hover:scale-125 duration-300 ease-in-out">
            <AiOutlineLinkedin />
          </a>
          <a
            href="mailto:assemned1000@gmail.com"
            className=" hover:scale-125 duration-300 ease-in-out">
            <MdOutlineMailOutline />
          </a>
        </div>
        <p className=" text-center">
          <span className=" font-semibold mr-1">@2023 Assem Ned</span>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
