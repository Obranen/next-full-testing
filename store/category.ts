import {create} from 'zustand'

interface IUseCategoryStore {
  updateCategoryAfterCreate: boolean,
  setUpdateCategoryAfterCreate: (isState: boolean) => void,
}

export const useCategoryStore = create<IUseCategoryStore>((set) => ({
  updateCategoryAfterCreate: false,
  setUpdateCategoryAfterCreate: (isState: boolean) => set({updateCategoryAfterCreate: isState})
}))