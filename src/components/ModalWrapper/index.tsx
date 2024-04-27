'use client';

import { Dispatch, createContext, useReducer } from "react";

interface TProps {
  children: React.ReactNode;
}

type TCountState = {
  count: number;
};

type TCounterAction = {
  type: 'INCREASE' | 'DECREASE';
};

const initialState: TCountState = {
  count: 0,
};

const countReducer = (state: TCountState, action: TCounterAction): TCountState => {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 };
    case 'DECREASE':
      return { count: state.count - 1 };
    default:
      throw new Error('invalid action type');
  }
};

export const countStateContext = createContext(0);
export const countDispatchContext = createContext<Dispatch<TCounterAction> | null>(null);



const modal = {
  open: true,
  test: true,
};

export const ModalContext = createContext(modal);

export default function ModalWrapper({ children }: TProps) {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <countDispatchContext.Provider value={dispatch}>
      <countStateContext.Provider value={state.count}>
        {children}
      </countStateContext.Provider>
    </countDispatchContext.Provider>
  );
}
