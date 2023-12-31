import {FC, useState} from 'react'
import {ICategoryState} from '../../../interface/category'
import Select from 'react-select'

interface ISelectBasic {
  options: any
  getCurrentOption?: (option: any) => void
}

const SelectBasic: FC<ISelectBasic> = ({getCurrentOption, options}) => {
  const [currentOption, setCurrentOption] = useState<ICategoryState>({id: '', label: '', value: ''})

  const selectChange = (option: any) => {
    setCurrentOption(option.value)
    if (getCurrentOption) {
      getCurrentOption(option)
    }
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