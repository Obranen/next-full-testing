import {useEffect, useState} from 'react'
import Select from 'react-select'
import {fetchCategories} from '../../../../async/category'
import {ICategoryState} from '../../../../interface/schema/category'

const CategorySelect = () => {
  const [currentOption, setCurrentOption] = useState('pizza')
  const [options, setOptions] = useState<ICategoryState[]>([])

  useEffect(() => {
    fetchCategories().then(data => {
      setOptions(data)
    })
  }, [])

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