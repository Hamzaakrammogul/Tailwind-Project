import React, { useState } from "react";
import logo from '../../img/logo.svg';
const Navbar = () => {

    const [value, setValue] = useState(false);
    const onClickHandler = () => {
        if (value === false) {
            setValue(true);
        } else {
            setValue(false);
        }
    }
    return (
        <nav className="relative container mx-auto p-6 ">
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
                <button onClick={onClickHandler} id="menu-btn" className={`block ${!value ? "hamburger" : 'open'} md:hidden focus:outline-none`} >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>

            <div className="md:hidden">
                <div className={`absolute ${!value ? "hidden" : "flex"} flex-col items-center  self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                    <ul >
                        <li className='hover:text-darkGrayishBlue cursor-pointer'>Pricing</li>
                        <li className='hover:text-darkGrayishBlue cursor-pointer'>Product</li>
                        <li className='hover:text-darkGrayishBlue cursor-pointer'>About Us</li>
                        <li className='hover:text-darkGrayishBlue cursor-pointer'>Careers</li>
                        <li className='hover:text-darkGrayishBlue cursor-pointer'>Community</li>

                    </ul>
                </div>
            </div>

        </nav>
    )
};
export default Navbar;
