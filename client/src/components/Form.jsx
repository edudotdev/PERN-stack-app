import { TextField, Button, CircularProgress } from '@mui/material'
import { useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useCrud from '../hooks/useCrud'

export const Form = () => {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })
  const [editing, setEditing] = useState(false)

  const { loading, error, createItem, getItem, updateItem } = useCrud('http://localhost:3000/tasks');
  const navigate = useNavigate()
  const params = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editing) {
      updateItem(params.id, task)
    } else {
      createItem(task)
    }
    navigate('/')
  }

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const loadTask = async (id) => {
    const items = await getItem(id)
    setTask(items)
    setEditing(true)
  }

  useEffect(() => {
    if(params.id) {
      loadTask(params.id)
    }
  }, [params.id])

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column',  gap: '1rem'}}>
      <TextField 
        variant='filled'
        label='Task title'
        inputProps={{style: {color: 'white'}}}
        InputLabelProps={{style: {color: 'white'}}}
        onChange={handleChange}
        name='title'
        value={task.title}
        required
      />
      <TextField 
        variant='filled'
        label='Description task'
        multiline
        rows={4}
        inputProps={{style: {color: 'white'}}}
        InputLabelProps={{style: {color: 'white'}}}
        onChange={handleChange}
        name='description'
        value={task.description}
        required
      />
      {!loading 
        ? <Button variant='contained' color='primary' type='submit'>
            {editing ? 'Update task' : 'Create task'}
          </Button>
        : <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress color='primary' size={24} /></div>
      }
    </form>
  )
}
