import React from "react";
import { Link } from "react-scroll";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-[#222] rounded-t-3xl">
      <div className=" flex flex-col md:flex-row justify-between md:px-32 px-5 p-5">
        <div className=" w-full md:w-1/4">
          <Link to="/">
            <img src="/images/logo_trasparente.png" className="w-16" />
          </Link>
          
        </div>
        
        <div>          
          <div className=" flex flex-row items-center gap-2">
            {/* <AiOutlineMail size={20} /> */}
            <a
              href="https://www.instagram.com/dr.marco_russo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram size={25} className="hover:text-yellow-100 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center mt-4">
           developed by Aether Creative Agency London
          | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
