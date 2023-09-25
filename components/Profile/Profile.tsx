'use client'

import {FC} from 'react'
import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/tabs'
import CreateProductForm from './CreateProductForm/CreateProductForm'
import CreateCategoryForm from './CreateCategoryForm/CreateCategoryForm'
import {Heading} from '@chakra-ui/react'
import CreateFilterForm from './CreateFilterForm/CreateFilterForm'
import {ICategoryState} from '../../interface/category'
import {IFilterState} from '../../interface/filter'

interface IProfile {
  categories: ICategoryState
  filtersCategory: IFilterState
}

const Profile: FC<IProfile> = ({categories, filtersCategory}) => {
  return (
    <>
      <Heading as={'h3'} size={'md'} textAlign={'left'} marginTop={'20px'} marginBottom={'10px'}>
        My profile:
      </Heading>
      <Tabs orientation="vertical">
        <TabList width={'400px'} border={'1px solid #000'}>
          <Tab borderBottom={'1px solid #000'}>Category</Tab>
          <Tab borderBottom={'1px solid #000'}>filter</Tab>
          <Tab borderBottom={'1px solid #000'}>Product</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CreateCategoryForm/>
          </TabPanel>
          <TabPanel>
            <CreateFilterForm categories={categories}/>
          </TabPanel>
          <TabPanel>
            <CreateProductForm categories={categories} filtersCategory={filtersCategory}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default Profile