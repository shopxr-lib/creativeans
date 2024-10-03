import React, { useState } from "react";
import Button from "../../assets/images/popup/button.png";
import RightArrow from "../../assets/images/popup/right-arrow.svg";

type Props = {
  href?: string;
  children: React.ReactNode;
} & React.ComponentProps<"button">;

const IconButton: React.FC<Props> = (props) => {
  const [hover, setHover] = useState(false);

  if (!props.href) {
    return (
      <button
        className="relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...props}
      >
        <img src={Button} className="h-12 w-full" />
        <div className="absolute top-0 flex h-full w-full items-center justify-evenly">
          <p className="text-center font-bold uppercase text-[#48e4e0]">
            {props.children}
          </p>
          <div className="flex w-10 overflow-hidden">
            <img
              src={RightArrow}
              className={`h-6 transform transition-transform duration-300 ease-linear ${hover ? "translate-x-0" : "-translate-x-12"}`}
            />
            <img
              src={RightArrow}
              className={`h-6 transform transition-transform duration-300 ease-linear ${hover ? "translate-x-6" : "-translate-x-6"}`}
            />
          </div>
        </div>
      </button>
    );
  }

  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={Button} className="h-12 w-full" />
      <div className="absolute top-0 flex h-full w-full items-center justify-evenly">
        <p className="text-center font-bold uppercase text-[#48e4e0]">
          {props.children}
        </p>
        <div className="flex w-10 overflow-hidden">
          {/* Before hover, hidden in the left. After hover, will slide to the right and shown */}
          <img
            src={RightArrow}
            className={`h-6 transform transition-transform duration-300 ease-linear ${hover ? "translate-x-0" : "-translate-x-12"}`}
          />
          {/* Before hover, shown. After hover, will slide to righe right and hidden */}
          <img
            src={RightArrow}
            className={`h-6 transform transition-transform duration-300 ease-linear ${hover ? "translate-x-6" : "-translate-x-6"}`}
          />
        </div>
      </div>
    </a>
  );
};

export default IconButton;
