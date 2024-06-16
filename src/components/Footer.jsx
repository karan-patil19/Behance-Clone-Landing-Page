import React from "react";
import { adobeLogo } from "../Data";

const Footer = () => {
  return (
    <section className="px-4 py-3 fixed w-full bottom-0   bg-white">
      <div className="container-fluid">
        <div className="grid lg:grid-cols-2 gap-3 item-center">
          <div className="left-foot">
          <ul className="flex item-center">
          <li className="mx-3 font-medium text-sm"><a href="http://" target="_blank
          " >Link One</a></li>
          <li className="mx-3 font-medium text-sm"><a href="http://" target="_blank
          " >Link Two</a></li>
          <li className="mx-3 font-medium text-sm"><a href="http://" target="_blank
          " >Link Three</a></li>
          <li className="mx-3 font-medium text-sm"><a href="http://" target="_blank
          " >Link Four</a></li>
          <li className="mx-3 font-medium text-sm"><a href="http://" target="_blank
          " >Link Five</a></li>
          </ul>
          
          </div>
          <div className="adobe-right flex lg:justify-end">
          <div className="mx-4 flex items-center hover:opacity-70">
          <img src ={adobeLogo} alt = {adobeLogo} className="w-5 h-5"/>
          <a href="#" className="pl-1 font-bold text-black text-sm"></a>
          </div></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;