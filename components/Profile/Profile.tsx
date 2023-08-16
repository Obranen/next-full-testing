'use client'

import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/tabs'
import {useSession} from 'next-auth/react'
import CreateProduct from './CreateProduct/CreateProduct'

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
          <CreateProduct/>
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