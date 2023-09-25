import {ChangeEvent, FC, useEffect, useState} from 'react'
import {Checkbox} from '@chakra-ui/checkbox'
import {ISubCategoryState} from '../../../../interface/subCategory'
import {useRouter, useSearchParams} from 'next/navigation'
import {ICategoryState} from '../../../../interface/category'

interface IFilterItem {
  subCategory: ISubCategoryState
  categories: ICategoryState[]
}

const FilterItem: FC<IFilterItem> = ({subCategory, categories}) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [checkedInput, setCheckedInput] = useState(false)
  const paramsURL = new URLSearchParams(searchParams.toString())

  const addURLParams = () => {
    paramsURL.append(categories[0].value, subCategory.value)
    router.push(`?${paramsURL}`)
  }
  
  const removeURLParams = () => {
    // @ts-ignore
    paramsURL.delete(categories[0].value, subCategory.value)
    router.push(`?${paramsURL}`)
  }
  
  const isCheckedInput = () => {
    // @ts-ignore
    if (paramsURL.has(categories[0].value, subCategory.value)) {
      setCheckedInput(true)
    }
  }

  useEffect(() => {
    isCheckedInput()
  }, [])

  const checkboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked
    if (isChecked) {
      addURLParams()
      setCheckedInput(true)
    } else {
      removeURLParams()
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