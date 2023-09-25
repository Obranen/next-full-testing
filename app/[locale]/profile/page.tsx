import Profile from '../../../components/Profile/Profile'
import {fetchCategories} from '../../../async/category'
import {fetchFilters} from '../../../async/filter'

const ProfilePage = async () => {
  const categories = await fetchCategories()
  const filtersCategory = await fetchFilters()
  return (
    <Profile categories={categories} filtersCategory={filtersCategory}/>
  )
}

export default ProfilePage
