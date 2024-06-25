import React from "react";
import { Link } from "react-router-dom";

function SideBar({ OpenSide }) {
  return (
    <section className={`${OpenSide ? "block" : "hidden"}`}>
      <ul className=" h-96 bg-white float-end flex flex-col justify-center items-left gap-10 w-full p-10 ">
        <li>
          <Link className="text-orange-500 text-xl font-bold" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-orange-500 text-xl font-bold" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className=" text-orange-500 text-xl font-bold" to="/Contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="text-orange-500 text-xl font-bold" to="/Gallery">
            Gallery
          </Link>
        </li>
        <li>
          <li>
            <Link className="text-orange-500 text-xl font-bold" to="/Services">
              Services
            </Link>
          </li>
        </li>
      </ul>
    </section>
  );
}

export default SideBar;
