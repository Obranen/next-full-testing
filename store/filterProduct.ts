import {create} from 'zustand'
import {IProductState} from '../interface/product'

interface IUseFilterProductStore {
  productsFilter: IProductState[],
  categoryTitle: string,
  setCategoryTitle: (title: string) => void,
  addProductInFilter: (array: IProductState) => void,
  deleteProductFromFilter: (id: string) => void,
}

export const useFilterProductStore = create<IUseFilterProductStore>((set) => ({
  productsFilter: [],
  categoryTitle: '',
  addProductInFilter: (array) => set(state => ({
    productsFilter: [
      ...state.productsFilter,
      array
    ]
  })),
  deleteProductFromFilter: (id) => set(state => ({
    productsFilter: state.productsFilter.filter((productId) => productId.subCategory !== id)
  })),
  setCategoryTitle: (title: string) => set({categoryTitle: title})
}))