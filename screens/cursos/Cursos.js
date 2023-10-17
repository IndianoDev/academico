import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { View } from 'react-native';
import { Button, Text, Card, FAB } from 'react-native-paper'



const Cursos = ({ navigation }) => {

  const [curso, setCurso] = useState([])

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem('cursos').then(resultado => {
        resultado = JSON.parse(resultado) || []
        setCurso(resultado)
      })
    }, [])
  );



  return (
    <>
    <ScrollView style={{padding: 15, border}}>

     
    

      {Cursos.map((item, i) => (
        <Text key={i}>{item.nome}</Text>
        
        ))}
      <View>

        <Button
          icon='plus'
          mode='contained'
          onPress={() => navigation.push('Cursos-form')}
          >
          Novo
        </Button>

      </View>

      {curso.map((item, i) => (
        <Card key={i} mode='outlined' style={{marginBottom: 10}}>
          <Card.Content>
            <Text variant="titleLarge">{item.nome}</Text>
            <Text variant="bodyMedium">{item.duracao}</Text>
            <Text variant="bodyMedium">{item.modalidade}</Text>
          </Card.Content>
        <Button buttonColor='blue' icon='percil-outline'>Alterar</Button>
        <Button buttonColor='red' icon='trash-can-outline'>Excluir</Button>
       
       
        </Card>

      ))}
 
 <FAB
    icon="plus"
    size='small'
    mode='eleved'
    style={ {
      position: 'absolute',
      right: 10,
      bottom: 10,
    }}
    onPress={() => console.log('Pressed')}
  />


      </ScrollView>

    </>
  )
}



export default Cursos