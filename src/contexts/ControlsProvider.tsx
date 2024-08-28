"use client";

import { useControls } from "leva";
import React, { createContext, useContext, ReactNode } from "react";

interface Controls {
  Model: string;
  autorotate: boolean;
  rotateSpeed: number;
  doorType: string;
  doorColor: string;
  windowType: string;
  windowColor: string;
  wallsType: string;
  wallsColor: string;
  roofType: string;
  roofColor: string;
}

interface ControlsContextType {
  controls: Controls;
  setControls: (value: Partial<Controls>) => void;
}

const ControlsContext = createContext<ControlsContextType | undefined>(
  undefined
);

export function ControlsProvider({ children }: { children: ReactNode }) {
  const [controls, setControls] = useControls(() => ({
    Model: {
      options: ["First project", "Second project"],
    },
    autorotate: { value: true, label: "Auto Rotate" },
    rotateSpeed: { value: 0.5, min: 0.1, max: 10, label: "Rotate Speed" },
    doorType: {
      options: ["Type 1", "Type 2", "Type 3", "Type 4"],
      label: "Door Type",
    },
    doorColor: {
      options: ["Standard", "Red", "Green", "Blue", "Yellow"],
      label: "Door Color",
    },
    windowType: {
      options: ["Type 1", "Type 2", "Type 3", "Type 4"],
      label: "Window Type",
    },
    windowColor: {
      options: ["Standard", "Red", "Green", "Blue", "Yellow"],
      label: "Window Color",
    },
    wallsType: {
      options: ["Type 1", "Type 2", "Type 3", "Type 4"],
      label: "Walls Type",
    },
    wallsColor: {
      options: ["Standard", "Red", "Green", "Blue", "Yellow"],
      label: "Walls Color",
    },
    roofType: {
      options: ["Type 1", "Type 2", "Type 3", "Type 4"],
      label: "Roof Type",
    },
    roofColor: {
      options: ["Standard", "Red", "Green", "Blue", "Yellow"],
      label: "Roof Color",
    },
  }));

  return (
    <ControlsContext.Provider value={{ controls, setControls }}>
      {children}
    </ControlsContext.Provider>
  );
}

export function useControlsContext() {
  const context = useContext(ControlsContext);

  if (!context) {
    throw new Error(
      "useControlsContext must be used within a ControlsProvider"
    );
  }

  return context;
}
