import React from "react";
import logo from '../../img/logo-white.svg';
import facebook from '../../img/icon-facebook.svg';
import youtube from '../../img/icon-youtube.svg';
import twitter from '../../img/icon-twitter.svg';
import instagram from '../../img/icon-instagram.svg';
import pinterest from '../../img/icon-pinterest.svg';

const Footer = () => {

    return (
        <div className="bg-veryDarkBlue">
            <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                <div className="flex felx-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    <div className=" mx-auto my-6 text-center text-white md:hidden">
                        Copyright &copy; 2023, All Rights Reserved
                    </div>
                    <img className="h-8" src={logo} alt="" />

                    <div className="flex justify-center space-x-4">

                        <img className="h-8" src={facebook} alt="" />
                        <img className="h-8" src={instagram} alt="" />
                        <img className="h-8" src={youtube} alt="" />
                        <img className="h-8" src={pinterest} alt="" />
                        <img className="h-8" src={twitter} alt="" />

                    </div>
                </div>
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <ul>
                            <li className="hover:text-brightRed">Home</li>
                            <li className="hover:text-brightRed">Pricing</li>
                            <li className="hover:text-brightRed">Products</li>
                            <li className="hover:text-brightRed">About</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-3 text-white">
                        <ul>
                            <li className="hover:text-brightRed">Careers</li>
                            <li className="hover:text-brightRed">Community</li>
                            <li className="hover:text-brightRed">Privacy policy</li>                        </ul>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <form>
                        <input placeholder="Update in your inbox" type="text" className="flex-1 px-4 rounded-full focus:outline-none" />

                        <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                            Go
                        </button>
                    </form>
                    <div className="hidden text-white md:block">
                        Copyright &copy; 2023, All Rights Reserved
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
