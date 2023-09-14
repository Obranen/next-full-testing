import {create} from 'zustand'

interface IUseFilterProductStore {
  categoryId: string,
  categoryTitle: string,
  setCategoryId: (id: string) => void,
  setCategoryTitle: (title: string) => void,
}

export const useFilterProductStore = create<IUseFilterProductStore>((set) => ({
  categoryId: '',
  categoryTitle: '',
  setCategoryId: (id: string) => set({categoryId: id}),
  // // @ts-ignore
  // setCategoryId: (idProducts: string) => set(state => (
  //   {
  //     categoryId: [
  //       ...state.categoryId,
  //       idProducts
  //     ]
  //   }
  // )),
  setCategoryTitle: (title: string) => set({categoryTitle: title}),
}))