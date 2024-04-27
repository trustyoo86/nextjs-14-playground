import ProviderTest from '@/components/ProviderTest';
import style from './index.module.scss';
import ModalButton from "@/components/ModalButton";
import ModalWrapper from '@/components/ModalWrapper';

export default function TestPage() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <ModalButton />
        <ModalWrapper>
          <ProviderTest />
        </ModalWrapper>
      </div>
    </div>
  );
}