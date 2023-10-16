import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const CursosForm = () => {

const [dados, setDados] = useState({})


function handleChange(valor, campo){
  setDados({...dados,[campo]: valor})

}

function salvar(){
  AsyncStorage.getItem('cursos').then(resultado => {
    const cursos = JSON.parse(resultado) || []
    cursos.push (dados)
    console.log(cursos)
 
    AsyncStorage.setItem('cursos', JSON.stringify(cursos))
 
    navigation.goBack()
  })
}
  return (

    <ScrollView style={{ margin: 15 }}>

      <Text>Formulario do curso</Text>

      <TextInput
        style={{ marginTop: 10 }}
        mode='outlined'
        label='nome' 
        value={dados.nome}
        onChangeText={(valor)=>handleChange(valor, 'nome')}
       />
        
      <TextInput
        style={{ marginTop: 10 }}
        mode='outlined'
        label='Duração'
        value={dados.duracao}
        keyboardType='decimal-pad' 
        onChangeText={(valor)=>handleChange(valor, 'duracao')}/>

      <TextInput 
      style={{ marginTop: 10 }} 
      mode='outlined' 
      label='Modalidade' 
      value={dados.modalidade}
      onChangeText={(valor)=>handleChange(valor, 'modalidade')}/>

      <Button onPress={salvar}> Salvar </Button>

    </ScrollView>


  )
}

export default CursosForm