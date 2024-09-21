import React, { useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
  openSidebar: (objectKey: string) => void;
  closeSidebar: () => void;
  activeObjectKey: string;
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
  const [activeObjectKey, setActiveObjectKey] = useState("");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const openSidebar = (key: string) => {
    setIsOpen(true);
    setActiveObjectKey(key);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        toggleSidebar,
        openSidebar,
        closeSidebar,
        activeObjectKey,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
