import { getServerSession } from 'next-auth'
import { authConfig } from '../../lib/auth'

const ProfilePage = async () => {
  const session = await getServerSession(authConfig)

  return (
    <>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && (
        <img src={session.user.image} alt={session.user.image} />
      )}
    </>
  )
}

export default ProfilePage
