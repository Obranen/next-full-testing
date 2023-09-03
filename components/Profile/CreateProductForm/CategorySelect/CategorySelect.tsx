import {useEffect, useState} from 'react'
import {fetchCategories} from '../../../../async/category'
import {fetchSubCategories} from '../../../../async/subCategory'
import {ICategoryState} from '../../../../interface/schema/category'
import {useCategoryStore} from '../../../../store/category'
import {useRouter} from 'next/navigation'
import SelectBasic from '../../../ui/SelectBasic/SelectBasic'

const CategorySelect = () => {
  const [catOption, setCatOption] = useState([])
  const [subCatOption, setSubCatOption] = useState([])
  const [options, setOptions] = useState<ICategoryState[]>([])
  const currentOption = useCategoryStore(state => state.currentOption)
  const setCurrentOption = useCategoryStore(state => state.setCurrentOption)
  const createdCategory = useCategoryStore(state => state.createdCategory)
  const router = useRouter()

  const selectChange = (option: any) => {
    setCurrentOption(option)
  }

  useEffect(() => {
    fetchCategories().then(dataCat => {
      fetchSubCategories().then(dataSubCat => {
        const option = dataCat.concat(dataSubCat)
        setOptions(option)
      }).finally(() => {
        if (createdCategory) {
          router.refresh()
        }
      })
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