import { ProductType } from "@/types";
import { create } from "zustand";

interface UseStorePreviewModalProps {
  isOpen: boolean;
  product: ProductType | any;
  openModal: (product: ProductType) => void;
  closeModal: () => void;
}

const useStorePreviewModal = create<UseStorePreviewModalProps>((set) => ({
  isOpen: false,
  product: undefined,
  openModal: (product: ProductType) => set({ isOpen: true, product }),
  closeModal: () => set({ isOpen: false }),
}));

export default useStorePreviewModal;
