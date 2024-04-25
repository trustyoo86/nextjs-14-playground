'use client';

import { useRouter } from "next/navigation";

export default function ModalButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/modals/1');
  };

  return (
    <button onClick={handleClick}>
      Test modal
    </button>
  );
}
