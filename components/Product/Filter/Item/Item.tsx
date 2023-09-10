import {ChangeEvent, FC} from 'react'
import {Checkbox} from '@chakra-ui/checkbox'
import {ISubCategoryState} from '../../../../interface/subCategory'

interface IItem {
  subCategory: ISubCategoryState
}

const Item: FC<IItem> = ({subCategory}) => {

  const checkboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked
    if (isChecked) {
      console.log(subCategory.id, 'isChecked')
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