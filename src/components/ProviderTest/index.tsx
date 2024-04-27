'use client';

import { useContext } from 'react';
import { countDispatchContext, countStateContext } from '@/components/ModalWrapper';

export default function ProviderTest() {
  const count = useContext(countStateContext);
  const dispatch = useContext(countDispatchContext);

  return (
    <>
      <div>count: {count}</div>
      {
        dispatch && (
          <>
            <button onClick={() => dispatch({ type: 'INCREASE' })}>+</button><br />
            <button onClick={() => dispatch({ type: 'DECREASE' })}>-</button>
          </>
        )
      }
    </>
  );
}
