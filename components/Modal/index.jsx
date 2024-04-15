"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Modal({ children }) {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHideModal() {
    router.back();
  }

  return (
    <dialog
      ref={modalRef}
      onClose={onHideModal}
      className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100 max-w-[90%]"
    >
      <span className="flex justify-end p-2">
        <span onClick={onHideModal} className="bg-white cursor-pointer p-1">
          <Image src="/xmark.svg" alt="close" width={30} height={30} />
        </span>
      </span>
      {children}
    </dialog>
  );
}

export default Modal;
