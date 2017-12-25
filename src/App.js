import React from 'react';
import { Grid, Segment, Icon, Form, FormGroup, Container, Button, Input, Select, } from 'semantic-ui-react'
import AlertContainer from 'react-alert'

const options = [
  { key: 'a', text: 'Dental', value: 'dental' },
  { key: 'b', text: 'Cardiologia', value: 'cardiologia' },
  { key: 'c', text: 'Urologia', value: 'urologia' },
  { key: 'd', text: 'Pediatria', value: 'pediatria' },
]



const App = (props) => {

  const alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'dark',
    time: 10000,
    transition: 'scale'
  }

  const showAlert = () => {
    this.msg.show('Datos Guardados', {
      time: 3000,
      type: 'success',
      icon: <Icon circular inverted color='teal' size='large' name='checkmark' />
    })
  }

  return (
    <Container>
      <br />
      
   
      
      <AlertContainer ref={a => this.msg = a} {...alertOptions} />
      <Grid columns={3} > 
      <Grid.Row >
      <Grid.Column />
      <Grid.Column mobile={16}  computer={6}>
      <center><h2>Registro de Doctores </h2></center>
      <br />
        <Segment>
          <Form onSubmit={showAlert} >

            <Form.Field control={Input} label='Nombre' placeholder='Nombre' />
            <Form.Field control={Input} label='Apellido' placeholder='Apellido' />
            <Form.Field control={Select} label='Especialiad' options={options} placeholder='Especialidad' />
            <Form.Field control={Input} type="number" label='Telefono' placeholder='Telefono' />
            <Form.Field control={Input} label='Direccion' placeholder='Direccion' />

            <Button color="teal" type='submit' fluid>Registrar</Button>
          </Form>
        </Segment>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}



export default App;
