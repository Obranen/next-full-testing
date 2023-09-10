import {create} from 'zustand'

interface IUseProductStore {
  categoryUpdate: boolean,
  setCategoryUpdate: (isState: boolean) => void,
}

export const useCategoryStore = create<IUseProductStore>((set) => ({
  categoryUpdate: false,
  setCategoryUpdate: (isState: boolean) => set({categoryUpdate: isState})
}))