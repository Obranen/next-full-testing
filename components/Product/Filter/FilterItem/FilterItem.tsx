import {ChangeEvent, FC} from 'react'
import {Checkbox} from '@chakra-ui/checkbox'
import {ISubCategoryState} from '../../../../interface/subCategory'
import {IProductState} from '../../../../interface/product'
import {useRouter, useSearchParams} from 'next/navigation'
import {ICategoryState} from '../../../../interface/category'

interface IFilterItem {
  subCategory: ISubCategoryState
  products: IProductState[]
  categories: ICategoryState[]
}

const FilterItem: FC<IFilterItem> = ({subCategory, categories, products}) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const checkboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked
    if (isChecked) {
      router.push(`?${categories[0].value}=${subCategory.value}`)
    } else {
      const params = new URLSearchParams(searchParams.toString())
      params.delete(categories[0].value)
      router.push(`?${params}`)
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

export default FilterItem