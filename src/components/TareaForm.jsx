import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {crearTarea} from '../features/tareas/tareaSlice'


const TareaForm = () => {
    const [texto, setTexto] = useState('')
    
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(crearTarea({texto}))
        setTexto('')
    }
  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="texto">Tarea</label>
                <input
                    type="text"
                    name='texto'
                    id='texto'
                    className='control'
                    placeholder='Ingresa tu tarea'
                    onChange={(e)=> setTexto(e.target.value)}
                />
            </div>
            <div className="form-group">
                <button type="submit" className='btn btn-block'>Agregar tarea</button>
            </div>
        </form>
    </section>
  )
}

export default TareaForm