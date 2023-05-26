import { create } from 'zustand'; //state mgmt lib

//the cust hook for the register modal comp
interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }), //we can use this in our user menu, when the user clicks signup
  onClose: () => set({ isOpen: false })
}));


export default useRegisterModal;
