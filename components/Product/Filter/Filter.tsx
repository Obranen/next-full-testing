import {FC} from 'react'
import {FormControl, FormLabel, GridItem} from '@chakra-ui/react'
import {IFilterState} from '../../../interface/filter'
import FilterItem from './FilterItem/FilterItem'
import {ICategoryState} from '../../../interface/category'

interface IFilter {
  filtersCategory: IFilterState[]
  categories: ICategoryState[]
}

const Filter: FC<IFilter> = ({filtersCategory, categories}) => {

  if (filtersCategory.length === 1 || filtersCategory.length === 0) {
    return <></>
  }

  return (
    <GridItem colSpan={1}>
      <FormControl>
        <FormLabel>{categories[0].label} ({filtersCategory.length})</FormLabel>
        {filtersCategory.map((filterCategory =>
            <FilterItem key={filterCategory.id} filterCategory={filterCategory} categories={categories}/>
        ))}
      </FormControl>
    </GridItem>
  )
}

export default Filter