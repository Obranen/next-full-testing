import {create} from 'zustand'
import {ICategoryState} from '../interface/schema/category'

interface IUseSubCategoryStore {
  currentOption: ICategoryState,
  setCurrentOption: (currentOption: ICategoryState) => void
}

export const useSubCategoryStore = create<IUseSubCategoryStore>((set) => ({
  currentOption: {
    id: '',
    value: '',
    label: ''
  },
  setCurrentOption: (currentOption: ICategoryState) => set({currentOption})
}))