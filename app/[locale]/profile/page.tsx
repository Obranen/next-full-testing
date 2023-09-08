import Profile from '../../../components/Profile/Profile'
import {fetchCategories} from '../../../async/category'
import {fetchSubCategories} from '../../../async/subCategory'

const ProfilePage = async () => {
  const categories = await fetchCategories()
  const subCategories = await fetchSubCategories()
  return (
    <Profile categories={categories} subCategories={subCategories}/>
  )
}

export default ProfilePage
