'use client';

import { useRouter } from 'next/navigation';

import styles from './index.module.scss';
import { useContext } from 'react';
import { ModalContext, countDispatchContext, countStateContext } from '@/components/ModalWrapper';

function Modal(props: { params: { id: string } }) {
  const { id } = props.params;
  const router = useRouter();
  const count = useContext(countStateContext);
  const dispatch = useContext(countDispatchContext);

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header} />
        <div className={styles.body}>
          <div>modal</div>
          <div>{id}</div>
          <div>count: {count}</div>
          {
            dispatch && (
              <>
                <button onClick={() => dispatch({ type: 'INCREASE' })}>+</button><br />
                <button onClick={() => dispatch({ type: 'DECREASE' })}>-</button>
              </>
            )
          }
        </div>
        <div className={styles.footer}>
          <button className={styles.button} onClick={() => router.push(`/modals/${id + 1}`)}>
            확인
          </button>
          <button className={styles.button} onClick={() => router.back()}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
