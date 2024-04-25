'use client';

import { useRouter } from 'next/navigation';

import styles from './index.module.scss';
import { useContext } from 'react';
import { ModalContext } from '@/components/ModalWrapper';

function Modal(props: { params: { id: string } }) {
  const { id } = props.params;
  const router = useRouter();
  const data = useContext(ModalContext);

  console.log('data', data);

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header} />
        <div className={styles.body}>
          <div>modal</div>
          <div>{id}</div>
        </div>
        <div className={styles.footer}>
          <button className={styles.button} onClick={() => history.back()}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
