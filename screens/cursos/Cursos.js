import React, { useEffect, useState } from 'react'
import { Button, Text,  Card } from 'react-native-paper'

const Cursos = ({navigation}) => {

    const [curso, setCurso] = useState([])
  
    useEffect(() => {
      AsyncStorage.getItem('cursos').then(resultado => {
        resultado = JSON.parse(resultado) || []
        setCurso(resultado)
      })
  }, [])
  
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
    {curso.map(item=>(
     <Card style={{marginBottom: 10}}>
      <Text>{item.nome}</Text>
      </Card>
    ))}
    </>
  )
}

export default Cursos