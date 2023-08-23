import React from "react";


const CTA = () => {
    return (
        <div id="cta" className="bg-brightRed ">
            <div className=" container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                <h2 className="text-5xl font-bold leading-tight text-white text-center md:text-4xl md:max-w-xl md:text-left">Simplify how your team works today</h2>

                <button className="bg-white rounded-full p-3 px-6 pt-2 shadow-2xl text-brightRed hover:bg-gray-300 ">
                    Get Started
                </button>
            </div>
        </div>

    );
};

export default CTA;