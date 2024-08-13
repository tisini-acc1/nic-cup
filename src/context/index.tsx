"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(null);

export function AppWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const DATES = ["2024-08-15", "2024-08-16", "2024-08-17", "2024-08-18"];

  const [activeTab, setActiveTab] = useState(0);
  const [activeCat, setActiveCat] = useState(0);

  const contextValue = {
    activeTab,
    setActiveTab,
    activeCat,
    setActiveCat,
    DATES,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
