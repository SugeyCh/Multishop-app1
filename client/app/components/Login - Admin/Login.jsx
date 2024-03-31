import { Customer } from "../Icons"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { loginAdmin } from '@api/Post'
import toast, {Toaster} from 'react-hot-toast'
import Image from "next/image"
import logo from '@p/multi2.jpg'

export default function Login() {
  const [redirect, setRedirect] = useState(false)
  const [username, setUsername] = useState({
    email: '',
    password: ''
  })

  const { push } = useRouter()
  useEffect(() => { if (redirect) push('/home') }, [redirect])

  const notifySucces = (msg) => { toast.success(msg) }
  const notifyError  = (msg) => { toast.error(msg) }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUsername({ ...username, [name]: value })
  }

  const loginUser = async (e) => {
    e.preventDefault()

    try {
      let res = await loginAdmin(username)
      if (res.status == 200) {
        if (res.data.message == 'Sesión iniciada correctamente') {
          notifySucces('Inicio de sección exitoso')
          setRedirect(true)
        } else { notifyError('Usuario o contraseña incorrectos') }
      } else { notifyError('Ha ocurrido un error en el inicio de sesión') }

      limpiarCampos()
    } catch (err) { console.error(err) }
  }

  const limpiarCampos = () => {
    setUsername({
      email: '',
      password: ''
    })
  }

  return(
    <>
      <div className="login">
      <Toaster position="top-right" reverseOrder={true} duration={5000}/>
        <div className="nv">
          <Image className="Logo2" src={ logo } alt="Logo de multishop" priority />
        </div>

        <div className="customer2">
          <div className="iconL">
            <Customer />
          </div>
          <div className="form-cusL">
            <form className="form-cusL2" action="" onSubmit={loginUser}>
              <input 
                className="cusL" 
                type="email" 
                placeholder="Correo"
                name="email" 
                value={username.email} 
                onChange={handleChange}
              />
              <input 
                className="cusL" 
                type="password" 
                placeholder="Contraseña"
                name="password"
                value={username.password} 
                onChange={handleChange} 
              />
              <button className="btn-cusL" type="submit">Iniciar Sesión</button>
            </form>
          </div>
        </div>

        <div className="multi footer">
          <span>Powered by</span>
          <Image className="mul img" src={ logo } alt="Logo de multishop" priority />
        </div>
      </div>
    </>
  )
}