import UserProfile   from "@c/Perfil - Cliente/Profile"
import { getCookie } from "@g/cookies"
import Navbar        from "@c/Navbar"
import Menu          from "@c/Menu"
import { getUser }   from '@api/Get'

export default function ClientProfile({ datapro, data } : any) {
  return(
    <>
      <div className='body'>
        <div className="container">
          <div className="navbar">
            <Navbar data={data} />
          </div>
          <div className="menu">
            <Menu />
          </div>
          <div className='main'>
            { datapro?.id && <UserProfile data={datapro} /> }
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async ({ req, params }: any) => {
  const { userId } = params
  const user = await getUser(userId)
  
  const profileCookie = getCookie('profile', req)
  const adminCookie = getCookie('Admins', req)

  if (!adminCookie) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  
  let data = null
  let datapro = null

  if (profileCookie && adminCookie) {
    try {
      const decodedCookie = decodeURIComponent(profileCookie)
      datapro = JSON.parse(decodedCookie)
      data = adminCookie
    } catch (error) {
      console.error('Error al analizar la cookie como JSON:', error)
    }
  }

  return {
    props: {
      datapro: user?.data?.data,
      data: data
    }
  }
}
