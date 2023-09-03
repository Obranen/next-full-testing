import {useEffect, useState} from 'react'
import {fetchCategories} from '../../../../async/category'
import SelectBasic from '../../../ui/SelectBasic/SelectBasic'
import {ICategoryState} from '../../../../interface/schema/category'
import {useRouter} from 'next/navigation'
import {useCategoryStore} from '../../../../store/category'
import {useSubCategoryStore} from '../../../../store/subCategory'

const CategorySelect = () => {
  const [options, setOptions] = useState<ICategoryState[]>([])
  const currentOption = useSubCategoryStore(state => state.currentOption)
  const setCurrentOption = useSubCategoryStore(state => state.setCurrentOption)
  const createdCategory = useCategoryStore(state => state.createdCategory)
  const router = useRouter()

  const selectChange = (option: ICategoryState) => {
    setCurrentOption(option)
  }

  useEffect(() => {
    fetchCategories().then(data => {
      setOptions(data)
    }).finally(() => {
      if (createdCategory) {
        router.refresh()
      }
    })
  }, [createdCategory, router])

  return (
    <SelectBasic options={options} selectChange={selectChange} currentOption={currentOption}/>
  )
}

export default CategorySelect