import React from "react";
import TestimonailData from "../utils/TestimonailData";



const TestimonialsData = ({ image, name, description }) => {
    return (

        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={image} alt="" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">{name}</h5>
            <p className="text-sm text-darkGrayishBlue">{description} </p>
        </div>
    );
}
const Testimonials = () => {
    return (
        <div>
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                <h2 className="text-4xl font-bold text-center">
                    What's Different about Manage
                </h2>
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6 ">
                    {TestimonailData.map((testi) => <TestimonialsData
                        key={testi.id}
                        name={testi.name}
                        image={testi.image}
                        description={testi.description}
                    />)}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
