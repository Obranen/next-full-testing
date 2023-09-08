import {FC, useState} from 'react'
import {ICategoryState} from '../../../interface/schema/category'
import Select from 'react-select'

interface ISelectBasic {
  options: ICategoryState[]
  getCurrentOption?: (option: any) => void
}

const SelectBasic: FC<ISelectBasic> = ({getCurrentOption, options}) => {
  const [currentOption, setCurrentOption] = useState<ICategoryState>({id: '', label: '', value: ''})
  // const categoryUpdate = useCategoryStore(state => state.categoryUpdate)

  const selectChange = (option: any) => {
    setCurrentOption(option.value)
    getCurrentOption(option)
  }

  return (
    <Select
      onChange={selectChange}
      value={currentOption.value}
      options={options}
    />
  )
}

export default SelectBasic