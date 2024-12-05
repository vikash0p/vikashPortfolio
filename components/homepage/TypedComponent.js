'use client';
import React from "react";
import { ReactTyped } from "react-typed";

const TypedComponent = () => {
    return (
        <div className="">

            <h1 className="mb-2 text-2xl font-bold md:text-4xl lg:text-5xl md:mb-3 lg:mb-4">
                <span>I am a </span>
                <ReactTyped
                    className="back"
                    strings={[
                        " front-end developer",
                        " React.js developer",
                        " Next.js developer",
                    ]}
                    typeSpeed={50}
                    backSpeed={40}
                    loop
                />
            </h1>
        </div>
    );
};

export default TypedComponent;
