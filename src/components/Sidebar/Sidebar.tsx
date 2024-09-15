import React from "react";
import { X } from "tabler-icons-react";
import { useSidebar } from "../../context/Sidebar/hooks";
import logo from "../../assets/images/creativeans-logo.webp";

const Sidebar: React.FC = () => {
  const sidebarContext = useSidebar();

  return (
    <>
      <div
        className={`fixed right-0 z-20 h-screen w-screen transform bg-[#f6f7fb] px-12 py-8 transition-transform duration-300 ease-in-out lg:w-1/2 ${
          sidebarContext.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8">
          <div
            data-label="header"
            className="flex items-center justify-between"
          >
            <a href="https://creativeans.com" target="_blank">
              <img
                src={logo}
                alt="Creativeans Logo"
                className="max-w-[50%] lg:max-w-none"
              />
            </a>
            <X
              onClick={sidebarContext.closeSidebar}
              size={48}
              strokeWidth={2}
              color={"black"}
              className="hover:cursor-pointer"
            />
          </div>
          <div data-label="body">
            {sidebarContext.iframeUrl && (
              <iframe
                src={sidebarContext.iframeUrl}
                allow="cross-origin"
                title="Creativeans"
                className="h-[calc(100vh-10rem)] w-full"
              />
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
