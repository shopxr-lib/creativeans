import React from "react";
import { X } from "tabler-icons-react";
import { useSidebar } from "../../context/Sidebar/hooks";
import { sidebarInfos } from "./constants";
import Button from "../../assets/images/popup/button.png";
import RightArrow from "../../assets/images/popup/right-arrow.svg";

const Sidebar: React.FC = () => {
  const sidebarContext = useSidebar();

  const sidebarInfo = sidebarInfos[sidebarContext.activeObjectKey ?? ""];

  return (
    <>
      <div
        className={`fixed right-0 z-20 h-screen w-screen transform overflow-y-scroll bg-[#f7f8fc] px-12 py-8 transition-transform duration-300 ease-in-out lg:w-1/2 ${
          sidebarContext.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8">
          <div data-label="header" className="flex items-center justify-end">
            <X
              onClick={sidebarContext.closeSidebar}
              size={48}
              strokeWidth={2}
              color={"black"}
              className="hover:cursor-pointer"
            />
          </div>
          <div data-label="body" className="mb-20 sm:mb-0">
            {sidebarInfo && (
              <div className="flex flex-col gap-8">
                <div className="flex justify-center">
                  <img className="h-[300px]" src={sidebarInfo.image} />
                </div>
                <p className="font-brand text-5xl uppercase">
                  {sidebarInfo.title}
                </p>
                {sidebarInfo.subtitle && (
                  <p className="font-brand uppercase">{sidebarInfo.subtitle}</p>
                )}
                {sidebarInfo.body}

                {sidebarInfo.buttonLink && (
                  <div className="flex">
                    <a
                      href={sidebarInfo.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex-shrink-[1]"
                    >
                      <img src={Button} className="h-12" />
                      <div className="absolute top-0 flex h-full w-full items-center justify-evenly">
                        <p className="text-center text-[#48e4e0]">
                          See Our Works
                        </p>
                        <img src={RightArrow} className="h-6" />
                      </div>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarContext.isOpen && (
        <div
          className="fixed z-10 h-screen w-screen bg-black opacity-70 hover:cursor-pointer"
          onClick={sidebarContext.closeSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
