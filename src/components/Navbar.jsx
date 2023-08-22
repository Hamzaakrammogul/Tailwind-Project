import React from "react";
import logo from '../../img/logo.svg';
const Navbar = () => {
    return (
        <nav className="realitive container mx-auto p-6 ">
            <div className=" flex items-center justify-between">
                <div className="pt-2">
                    <img src={logo} alt="" />
                </div>
                <div className="hidden md:flex">
                    <ul className="flex space-x-6">
                        <li className='hover:text-darkGrayishBlue cursor-pointer'>Pricing</li>
                        <li className='hover:text-darkGrayishBlue cursor-pointer'>Product</li>
                        <li className='hover:text-darkGrayishBlue cursor-pointer'>About Us</li>
                        <li className='hover:text-darkGrayishBlue cursor-pointer'>Careers</li>
                        <li className='hover:text-darkGrayishBlue cursor-pointer'>Community</li>

                    </ul>
                </div>
                <div>
                    <button className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;
