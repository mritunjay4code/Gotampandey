import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <footer class="bg-black text-white">
        <div class="mx-auto w-full max-w-screen-xl p-10">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 class="mb-6 text-xl font-semibold  uppercase text-white">
                Useful Links
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <Link className="  font-bold" to="/">
                    Home
                  </Link>
                </li>
                <li class="mb-4">
                  <Link className="  font-bold" to="/About">
                    About
                  </Link>
                </li>

                <li class="mb-4">
                  <Link className="  font-bold" to="/Contact">
                    Contact Us
                  </Link>
                </li>
                <li class="mb-4">
                  <Link className="  font-bold" to="/Gallery">
                    Gallery
                  </Link>
                </li>
                <li class="mb-4">
                  <Link className="  font-bold" to="/Services">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-xl font-semibold  uppercase text-white">
                About
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <p>
                    Pooja is a traditional Hindu ritual of worship, involving
                    offerings to deities. It typically includes the use of
                    flowers, incense, and food, along with prayers and hymns.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-xl font-semibold  uppercase text-white">
                MALING ADDRESS
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <span>Address:Meethpur badarpur new Delhi 110044</span>
                </li>
                <li class="mb-4">
                  <li href="#" class="display-flex">
                    <FaPhoneAlt />
                    9934064363, 7903134824
                  </li>
                  <a href="#" class="hover:underline">
                    {" "}
                    <MdEmail />
                  </a>
                  <p></p>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-xl font-semibold  uppercase text-white">
                Download
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    iOS
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Android
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Windows
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h1 class="text-center text-2xl">
            © NovaeXporium 2024 All rights Reserved{" "}
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
