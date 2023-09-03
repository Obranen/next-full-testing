import {create} from 'zustand'
import {ICategoryState} from '../interface/schema/category'

interface IUseCategoryStore {
  currentOption: ICategoryState,
  setCurrentOption: (currentOption: ICategoryState) => void
  createdCategory: boolean,
  setCreatedCategory: (isState: boolean) => void,
}

export const useCategoryStore = create<IUseCategoryStore>((set) => ({
  createdCategory: false,
  currentOption: {
    id: '',
    value: '',
    label: ''
  },
  setCreatedCategory: (isState: boolean) => set({createdCategory: isState}),
  setCurrentOption: (currentOption: ICategoryState) => set({currentOption})
}))