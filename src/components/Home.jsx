import React from "react";
import Navbar from "./Navbar";
import illustration from '../../img/illustration-intro.svg';
import Data from '../utils/Data';
import ItemList from "./ItemList";
import Testimonials from "./Testimonial";
 

const Home = () => {

    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 ">
                {/* Left Side */}
                <div className="flex flex-col mb-32 space-y-12 w-1/2">
                    <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                        Bring everyone together to build better products
                    </h1>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left " >
                        Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className="  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                            Get Started
                        </button>
                    </div>
                </div>
                {/* Right Side */}
                <div className="md:w-1/2">
                    <img src={illustration} alt="" />
                </div>
            </div>
            {/* Feature Section */}
            <div className="container flex flex-col mx-auto px-4 mt-10 space-y-12 md:space-y-0 md:flex-row">
                <div className=" flex flex-col space-y-12  md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                        What's different about Manage?
                    </h2>
                    <p max-w-sm text-center text-darkGrayishBlue md:text-left >
                        Manage provides all teh functionality your team needs <br/>  without the complexity.
                        Our software is trailor-made for <br/> modern digital product teams.
                    </p>
                </div>
                <div className="flex flex-col space-y-8 md:w-1/2">
                {Data.map((item)=> (
                    <ItemList 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    />
                ))}
                </div>
            </div>
            <Testimonials/>
            
           
    
        </>
    );
};

export default Home;
