import React, { createContext, useState } from "react";

type EventsContextType = {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
};

export const EventContext = createContext<EventsContextType | null>(null);

type ProviderProps = {
  children: React.ReactNode;
  initialEnabled: boolean;
};
export const EventProvider: React.FC<ProviderProps> = ({
  children,
  initialEnabled,
}) => {
  const [enabled, setEnabled] = useState(initialEnabled);

  return (
    <EventContext.Provider value={{ enabled, setEnabled: setEnabled }}>
      {children}
    </EventContext.Provider>
  );
};
