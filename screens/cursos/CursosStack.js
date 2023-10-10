import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Cursos from './Cursos';
import CursosForm from './CursosForm';

const stack = createNativeStackNavigator();

const CursosStack = () => {
  return (
  <>
  <stack.Navigator>
    <stack.Screen  name='Cursos' component={Cursos} options={{title:'Cursos'}}    />
    <stack.Screen  name='Cursos-form' component={CursosForm} options={{title:'Cursos'}}        />
  </stack.Navigator>
  
  </>
  )
}

export default CursosStack