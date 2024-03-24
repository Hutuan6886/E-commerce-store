"use client";

import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import useStorePreviewModal from "@/hooks/useStorePreviewModal";
import Gallery from "@/components/ui/Gallery";
import Info from "@/components/ui/Info";

const PreviewModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  //todo: sử dụng useStorePreviewModal() hook lấy về các state được lưu
  const storePreviewModal = useStorePreviewModal();
  const product = useStorePreviewModal((state) => state.product);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Modal
      isOpen={storePreviewModal.isOpen}
      closeModal={storePreviewModal.closeModal}
    >
      {/* //todo: Modal là khung layout của PreviewModal. Tại đây là children props của Modal */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-x-4">
        <div className="sm:col-span-7">
          <Gallery images={product?.images} />
        </div>
        <div className="sm:col-span-5">
          <Info product={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
