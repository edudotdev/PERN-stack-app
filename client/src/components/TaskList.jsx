import { Card, CardContent, Typography, Button, CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useCrud from '../hooks/useCrud'

export const TaskList = () => {
  const { data, loading, error, deleteItem } = useCrud('http://localhost:3000/tasks');
  const navigate = useNavigate()
  
  return (
    <>
      <h1>Task List</h1>
      {error && <p>Error: {error.message}</p>}
      {!loading ? data && (
        <div>
          {
            data.map(task => (
              <Card key={task.id} style={{ 
                marginBottom: '.7rem',
                backgroundColor: '#1e272e'
              }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ color: '#fff'}}>
                    <Typography>{task.title}</Typography>
                    <Typography>{task.description}</Typography>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button variant='contained' color='inherit' onClick={() => navigate(`/tasks/${task.id}/edit`)}>
                      Edit
                    </Button>
                    <Button onClick={() => deleteItem(task.id)} variant='contained' color='warning'>
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          }
        </div>
      ) : <CircularProgress color='secondary' size={40} />}
    </>
  )
}
