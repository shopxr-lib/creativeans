import React, { useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
  openSidebar: (iframeUrl: string) => void;
  closeSidebar: () => void;
  iframeUrl: string;
};

export const SidebarContext = React.createContext<SidebarContextType | null>(
  null,
);

type SidebarProviderProps = {
  children: React.ReactNode;
};

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const openSidebar = (iframeUrl: string) => {
    setIsOpen(true);
    setIframeUrl(iframeUrl);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider
      value={{ isOpen, toggleSidebar, openSidebar, closeSidebar, iframeUrl }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
