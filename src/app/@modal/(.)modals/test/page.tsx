'use client';

import { useRouter } from 'next/navigation';

import styles from './index.module.scss';

function Modal() {
  const router = useRouter();

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header} />
        <div className={styles.body}>
          <div>modal - not dynamic</div>
        </div>
        <div className={styles.footer}>
          <button className={styles.button} onClick={() => router.push('/modals/1')}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
