import {FC} from 'react'
import Select from 'react-select'
import {ICategoryState} from '../../../interface/schema/category'

interface ISelectBasic {
  options: ICategoryState[]
  selectChange: (option: any) => void
  currentOption: ICategoryState
}

const SelectBasic: FC<ISelectBasic> = ({options, selectChange, currentOption}) => {
  return (
    <Select
      onChange={selectChange}
      value={currentOption}
      options={options}
    />
  )
}

export default SelectBasic