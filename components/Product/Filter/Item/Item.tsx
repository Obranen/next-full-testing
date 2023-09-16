import {ChangeEvent, FC} from 'react'
import {Checkbox} from '@chakra-ui/checkbox'
import {ISubCategoryState} from '../../../../interface/subCategory'
import {useFilterProductStore} from '../../../../store/filterProduct'
import {IProductState} from '../../../../interface/product'

interface IItem {
  subCategory: ISubCategoryState
  products: IProductState[]
}

const Item: FC<IItem> = ({subCategory, products}) => {
  const deleteProductFromFilter = useFilterProductStore(state => state.deleteProductFromFilter)
  const addProductInFilter = useFilterProductStore(state => state.addProductInFilter)

  const checkboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked
    if (isChecked) {
      products.forEach(product => {
        if (subCategory.id === product.subCategory) {
          addProductInFilter({...product})
        }
      })
    } else {
      deleteProductFromFilter(subCategory.id)
    }
  }

  return (
    <Checkbox
      colorScheme="green"
      onChange={checkboxChange}
      key={subCategory.id}
      display={'block'}
    >
      {subCategory.label}
    </Checkbox>
  )
}

export default Item