import {ChangeEvent, FC} from 'react'
import {Checkbox} from '@chakra-ui/checkbox'
import {ISubCategoryState} from '../../../../interface/subCategory'
import {useFilterProductStore} from '../../../../store/filterProduct'

interface IItem {
  subCategory: ISubCategoryState
}

const Item: FC<IItem> = ({subCategory}) => {
  const setCategoryId = useFilterProductStore(state => state.setCategoryId)

  const checkboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked
    if (isChecked) {
      setCategoryId(subCategory.id)
    } else {
      setCategoryId('')
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