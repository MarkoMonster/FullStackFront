import { useState, useEffect } from 'react'
import {FaSignInAlt} from 'react-icons/fa'

const Login = () => {

    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
    })

    const {  email, password } = formData;

    const onChange = (e) => {
        setFormData( (prevState) => ({...prevState, [e.target.name] : e.target.value })) 
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <>
        <section className='heading'>
            <h5><FaSignInAlt/> Login</h5>
            <p>Iniciar sesión</p>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
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


                <div className="form-group">
                    <button type="submit" className='btn btn-block'>Login</button>
                </div>
                
            </form>
        </section>
    </>
    
  )
}

export default Login