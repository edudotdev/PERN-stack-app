import { Grid, Typography, Card, CardContent } from '@mui/material'
import { Form } from './Form'

export const TaskAdd = () => {
  return (
    <Grid 
      container 
      direction='column'
      alignItems='center'
      justifyContent='center'
      marginTop={5}
    >
      <Grid item xs={3}>
        <Card
          sx={{mtd: 5}}
          style={{backgroundColor: '#1e272e', padding: '1rem'}}
        >
          <Typography variant='h6' textAlign='center' color='white'>
            Create task
          </Typography>
          <CardContent>
            <Form />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
