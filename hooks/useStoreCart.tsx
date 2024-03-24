import { ProductType } from "@/types";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface StoreProps {
  //todo: Tạo cart state
  cartArray: ProductType[];
  //todo: Tạo các function update cart state
  addProduct: (product: ProductType) => void;
  removeProduct: (productId: string) => void;
  removeAll: () => void;
}
const useStoreCart = create(
  //todo: persist có 2 params
  persist<StoreProps>(
    (set, get) => ({
      cartArray: [],

      //todo: input product là giá trị gửi lên
      addProduct: (product: ProductType) => {
        //todo: lấy về giá trị cart hiện tại trong store
        let currentCartArray = get().cartArray;
        //todo: tìm sp đã tồn tại hay chưa
        const productExist = currentCartArray.find(
          (item) => item.id === product.id
        );
        //todo: Nếu sản phẩm thêo vào đã tồn tại trong cartStore, thông báo đã tồn tại hoặc cộng thêm số lượng hoặc xoá sp đó đi
        if (productExist) {
          set({
            cartArray: [
              ...get().cartArray.filter((item) => item.id !== product.id),
            ],
          });
          return toast("Đã xoá khỏi giỏ hàng", {
            icon: <FaTrashAlt style={{ color: "#a73a4b" }} />,
          });
        }

        set({ cartArray: [...get().cartArray, product] });
        toast.success("Đã thêm vào giỏ hàng");
      },

      removeProduct: (productId: string) => {
        // const currentCartArray = get().cartArray.filter(
        //   (item) => item.id !== productId
        // );
        // set({ cartArray: [...currentCartArray] });
        set({
          cartArray: [
            ...get().cartArray.filter((item) => item.id !== productId),
          ],
        });

        return toast("Đã xoá khỏi giỏ hàng", {
          icon: <FaTrashAlt style={{ color: "#a73a4b" }} />,
        });
      },
      removeAll: () => {
        set({ cartArray: [] });
      },
    }),
    //todo: session storage để lưu trữ state trong storage
    //todo: https://docs.pmnd.rs/zustand/integrations/persisting-store-data
    {
      name: "Cart-Store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useStoreCart;
