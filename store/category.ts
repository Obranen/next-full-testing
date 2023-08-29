import {create} from 'zustand'

interface IUseCategoryStore {
  createdCategory: boolean,
  currentOption: string,
  setCreatedCategory: (isState: boolean) => void,
  setCurrentOption: (currentOption: string) => void
}

export const useCategoryStore = create<IUseCategoryStore>((set) => ({
  createdCategory: false,
  currentOption: '',
  setCreatedCategory: (isState: boolean) => set({createdCategory: isState}),
  setCurrentOption: (currentOption: string) => set({currentOption})
}))