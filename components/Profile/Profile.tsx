'use client'

import {FC} from 'react'
import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/tabs'
import CreateProductForm from './CreateProductForm/CreateProductForm'
import CreateCategoryForm from './CreateCategoryForm/CreateCategoryForm'
import {Heading} from '@chakra-ui/react'
import CreateSubCategoryForm from './CreateSubCategoryForm/CreateSubCategoryForm'
import {ICategoryState} from '../../interface/schema/category'
import {ISubCategoryState} from '../../interface/schema/subCategory'

interface IProfile {
  categories: ICategoryState
  subCategories: ISubCategoryState
}

const Profile: FC<IProfile> = ({categories, subCategories}) => {
  return (
    <>
      <Heading as={'h3'} size={'md'} textAlign={'left'} marginTop={'20px'} marginBottom={'10px'}>
        My profile:
      </Heading>
      <Tabs orientation="vertical">
        <TabList width={'400px'} border={'1px solid #000'}>
          <Tab borderBottom={'1px solid #000'}>Category</Tab>
          <Tab borderBottom={'1px solid #000'}>SubCategory</Tab>
          <Tab borderBottom={'1px solid #000'}>Product</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CreateCategoryForm/>
          </TabPanel>
          <TabPanel>
            <CreateSubCategoryForm categories={categories}/>
          </TabPanel>
          <TabPanel>
            <CreateProductForm categories={categories} subCategories={subCategories}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default Profile