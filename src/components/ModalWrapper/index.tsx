'use client';

import { createContext } from "react";

interface TProps {
  children: React.ReactNode;
}

const modal = {
  open: true,
  test: true,
};

export const ModalContext = createContext(modal);

export default function ModalWrapper({ children }: TProps) {
  return (
    <ModalContext.Provider value={modal}>
      {children}
    </ModalContext.Provider>
  );
}
