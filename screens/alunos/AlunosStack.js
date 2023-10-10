import React from 'react'

const stack = createNativeStackNavigator();

const AlunosStack = () => {
  return (
    <>
    <stack.Navigator>
      <stack.Screen  name='Cursos' component={Cursos} options={{title:'Cursos'}}    />
      <stack.Screen  name='Cursos-form' component={CursosForm} options={{title:'Cursos'}}        />
    </stack.Navigator>
    
    </>
  )
}

export default AlunosStack