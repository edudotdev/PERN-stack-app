import { Box, Container, AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link, useNavigate} from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='transparent'>
        <Container>
          <Toolbar>
            <Typography variant='h5' sx={{ flexGrow: 1 }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                PERN Stack
              </Link>
              <Button variant='contained' color='primary' onClick={() => navigate('/tasks/new')}>
                New Task
              </Button>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
