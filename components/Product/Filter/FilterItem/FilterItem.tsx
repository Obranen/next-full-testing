import {ChangeEvent, FC, useEffect, useState} from 'react'
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
  const [checkedInput, setCheckedInput] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    // @ts-ignore
    if (params.has(categories[0].value, subCategory.value)) {
      setCheckedInput(true)
    }
  }, [])

  const checkboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked
    if (isChecked) {
      const params = new URLSearchParams(searchParams.toString())
      params.append(categories[0].value, subCategory.value)
      router.push(`?${params}`)
      setCheckedInput(true)
    } else {
      const params = new URLSearchParams(searchParams.toString())
      // @ts-ignore
      params.delete(categories[0].value, subCategory.value)
      router.push(`?${params}`)
      setCheckedInput(false)
    }
  }

  return (
    <Checkbox
      colorScheme="green"
      onChange={checkboxChange}
      key={subCategory.id}
      display={'block'}
      isChecked={checkedInput}
    >
      {subCategory.label}
    </Checkbox>
  )
}

export default FilterItem