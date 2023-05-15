import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { TaskList } from './components/TaskList'
import { TaskAdd } from './components/TaskAdd'
import { TaskEdit } from './components/TaskEdit'
import { Container } from '@mui/material'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskAdd />} />
          <Route path="/tasks/:id/edit" element={<TaskEdit />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
