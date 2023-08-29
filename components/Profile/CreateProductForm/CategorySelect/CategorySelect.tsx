import {FC, useEffect, useState} from 'react'
import Select from 'react-select'
import {fetchCategories} from '../../../../async/category'
import {ICategoryState} from '../../../../interface/schema/category'
import {useCategoryStore} from '../../../../store/category'
import {useRouter} from 'next/navigation'

interface ICategorySelect {

}

const CategorySelect: FC<ICategorySelect> = ({}) => {
  const [options, setOptions] = useState<ICategoryState[]>([])
  const createdCategory = useCategoryStore(state => state.createdCategory)
  const currentOption = useCategoryStore(state => state.currentOption)
  const setCurrentOption = useCategoryStore(state => state.setCurrentOption)
  const router = useRouter()

  useEffect(() => {
    fetchCategories().then(data => {
      setOptions(data)
    }).finally(() => {
      if (createdCategory) {
        router.refresh()
      }
    })
  }, [createdCategory])

  const getValue = () => {
    return currentOption ? options.find(current => current.value === currentOption) : ''
  }

  const selectChange = (option: any) => {
    setCurrentOption(option.value)
  }

  return (
    <Select
      onChange={selectChange}
      value={getValue()}
      options={options}
      className={'react-select-container'}
      classNamePrefix={'custom-select'}
    />
  )
}

export default CategorySelect