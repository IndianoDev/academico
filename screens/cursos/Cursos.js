import React from 'react'
import { Button, Text } from 'react-native-paper'

const Cursos = ({navigation}) => {
  return (
    <>
    <Text>hello</Text>
    <Button
    icon='plus'
    mode='contained'
    onPress={()=>navigation.push('Cursos-form')}
    >
Novo
    </Button>
    </>
  )
}

export default Cursos