import React from "react";
import { useSidebar } from "../../context/Sidebar/hooks";
import { sidebarInfos } from "./constants";
import { CloseIcon } from "../Icon";
import IconButton from "../IconButton";

const Sidebar: React.FC = () => {
  const sidebarContext = useSidebar();

  const sidebarInfo = sidebarInfos[sidebarContext.activeObjectKey ?? ""];

  return (
    <>
      {/* pb and pt are hardcoded because the contact page has a fixed menu on clients' web, hence adding some space. */}
      <div
        className={`fixed right-0 z-20 h-screen w-screen transform overflow-y-scroll bg-[#f7f8fc] px-12 pb-[200px] pt-[100px] transition-transform duration-300 ease-in-out lg:w-1/2 lg:pt-[160px] ${
          sidebarContext.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8">
          <div data-label="header" className="flex items-center justify-end">
            <CloseIcon onClick={sidebarContext.closeSidebar} />
          </div>
          <div data-label="body" className="mb-20 sm:mb-0">
            {sidebarInfo && (
              <div className="flex flex-col gap-8">
                <div className="flex justify-center">
                  <img
                    className="h-[30vh] 2xl:h-[50vh]"
                    src={sidebarInfo.image}
                  />
                </div>
                <p className="font-brand text-5xl uppercase">
                  {sidebarInfo.title}
                </p>
                {sidebarInfo.subtitle && (
                  <p className="font-brand uppercase">{sidebarInfo.subtitle}</p>
                )}
                {sidebarInfo.body}

                <div className="grid items-center gap-4 sm:grid-cols-[250px,250px]">
                  {sidebarInfo.buttonLink && (
                    <IconButton href={sidebarInfo.buttonLink}>
                      Learn More
                    </IconButton>
                  )}
                  <IconButton
                    onClick={() => {
                      window.parent.postMessage(
                        "openPopup",
                        "https://www.creativeans.com",
                      );
                    }}
                  >
                    Contact Us
                  </IconButton>
                </div>
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
