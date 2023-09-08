import {create} from 'zustand'

interface IUseCategoryStore {
  categoryUpdate: boolean,
  setCategoryUpdate: (isState: boolean) => void,
}

export const useCategoryStore = create<IUseCategoryStore>((set) => ({
  categoryUpdate: false,
  setCategoryUpdate: (isState: boolean) => set({categoryUpdate: isState})
}))