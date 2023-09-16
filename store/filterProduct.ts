import {create} from 'zustand'
import {IProductState} from '../interface/product'

interface IUseFilterProductStore {
  productsFilter: IProductState[],
  categoryTitle: string,
  setCategoryTitle: (title: string) => void,
  addProductInFilter: (object: IProductState) => void,
  deleteProductFromFilter: (id: string) => void,
  cleanProductFilter: () => void,
}

export const useFilterProductStore = create<IUseFilterProductStore>((set) => ({
  productsFilter: [],
  categoryTitle: '',
  addProductInFilter: (object) => set(state => ({
    productsFilter: [
      ...state.productsFilter,
      object
    ]
  })),
  deleteProductFromFilter: (id) => set(state => ({
    productsFilter: state.productsFilter.filter((productId) => productId.subCategory !== id)
  })),
  cleanProductFilter: () => set(state => ({
    productsFilter: []
  })),
  setCategoryTitle: (title: string) => set({categoryTitle: title})
}))