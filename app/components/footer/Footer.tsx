import React from "react";
import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container>
          <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
            <FooterList>
              <h3 className="text-base font-bold">Shop Categories</h3>
              <Link href="#">Phones</Link>
              <Link href="#">Laptop</Link>
              <Link href="#">Desktop</Link>
              <Link href="#">Watches</Link>
              <Link href="#">TV</Link>
              <Link href="#">Accesories</Link>
            </FooterList>
            <FooterList>
              <h3 className="text-base font-bold">Customer Service</h3>
              <Link href="#">Contact Us</Link>
              <Link href="#">Shipping Policy</Link>
              <Link href="#">Return & Exchanges</Link>
              <Link href="#">Watches</Link>
              <Link href="#">FAQ</Link>
            </FooterList>
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-base font-bold mb-2">About Us</h3>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                sunt est culpa porro, quisquam explicabo facere consequuntur
                ipsam dolore deleniti.
              </p>
              <p>
                &copy; {new Date().getFullYear()} E.Shop All rights reserved
              </p>
            </div>
            <FooterList>
              <div className="w-full md:w-1/2 mb-6 md:mb-0 mx-8">
                <h3 className="text-base font-bold mb-2">Follow US</h3>
                <div className="flex gap-2">
                  <Link href="#">
                    <MdFacebook size={24} />
                  </Link>
                  <Link href="#">
                    <AiFillInstagram size={24} />
                  </Link>
                  <Link href="#">
                    <AiFillYoutube size={24} />
                  </Link>
                  <Link href="#">
                    <AiFillTwitterCircle size={24} />
                  </Link>
                </div>
              </div>
            </FooterList>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
