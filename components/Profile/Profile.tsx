'use client'

import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/tabs'
import {useSession} from 'next-auth/react'
import CreateProductForm from './CreateProductForm/CreateProductForm'

const Profile = () => {
  const {data: session} = useSession()

  return (
    <Tabs orientation="vertical">
      <TabList width={'400px'} border={'1px solid #000'}>
        <Tab borderBottom={'1px solid #000'}>Create Product</Tab>
        <Tab borderBottom={'1px solid #000'}>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <CreateProductForm/>
        </TabPanel>
        <TabPanel>
          two
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Profile