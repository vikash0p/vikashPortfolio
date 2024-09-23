'use client';
import React from "react";
import { ReactTyped } from "react-typed";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const TypedComponent = () => {
    return (
        <div className="  ">

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
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
