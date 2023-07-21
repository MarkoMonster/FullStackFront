import { useState, useEffect } from 'react'
import {FaUser} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Register = () => {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth )

    const onChange = (e) => {
        setFormData( (prevState) => ({...prevState, [e.target.name] : e.target.value })) 
    }

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess){
            navigate('/login')
        }
        dispatch(reset())

    },[user, isError, isSuccess, message, navigate, dispatch])

    const onSubmit = (e) => {
        e.preventDefault();

        if(password !== password2) {
            toast.error('Las Constraseñas no coinciden')
        } else {
            const userData = {
                name,
                email,
                password
            }
            dispatch(register(userData))
        }
    }

    if(isLoading) {
        return <Spinner />
    }

  return (
    <>
        <section className='heading'>
            <h5><FaUser/> Registrar nuevo usuario</h5>
            <p>Por favor ingresa los siguientes datos requeridos.</p>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input type="text" 
                        className='control'
                        id="name"
                        name="name"
                        value={name}
                        placeholder='Por favor ingresa nombre'
                        onChange={onChange}
                    />
                </div>

                <div className='form-group'>
                    <input type="email" 
                        className='control'
                        id="email"
                        name="email"
                        value={email}
                        placeholder='Por favor ingresa email'
                        onChange={onChange}
                    />
                </div>

                <div className='form-group'>
                    <input type="password" 
                        className='control'
                        id="password"
                        name="password"
                        value={password}
                        placeholder='Por favor ingresa password'
                        onChange={onChange}
                    />
                </div>

                <div className='form-group'>
                    <input type="password" 
                        className='control'
                        id="password2"
                        name="password2"
                        value={password2}
                        placeholder='Por favor confirma el password'
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-block'>Crear usuario</button>
                </div>
                
            </form>
        </section>
    </>
    
  )
}

export default Register