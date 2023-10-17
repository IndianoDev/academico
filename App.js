import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet,} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CursosStack from './screens/cursos/CursosStack';
import Alunos from './screens/alunos/Alunos';
import Professores from './screens/professores/Professores';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
   <>
   <PaperProvider>
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen
        name="cursos"
        component={CursosStack}
        options={{
      
          tabBarIcon: () => (
            <MaterialCommunityIcons name="book" size={26} />
          ),
        }}
      />
    <Tab.Screen
        name="Diciplinas"
        component={CursosStack}
        options={{
      
          tabBarIcon: () => (
            <MaterialCommunityIcons name="book-open-variant" size={26} />
          ),
        }}
      />
    <Tab.Screen
        name="Alunos"
        component={Alunos}
        options={{
      
          tabBarIcon: () => (
            <MaterialCommunityIcons name="badge-account-horizonta" size={26} />
          ),
        }}
      />
    <Tab.Screen
        name="Professores"
        component={Professores}
        options={{
      
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account-multiple-outline" size={26} />
          ),
        }}
      />
    <Tab.Screen
        name="Turmas"
        component={CursosStack}
        options={{
      
          tabBarIcon: () => (
            <MaterialCommunityIcons name="google-classroom" size={26} />
          ),
        }}
      />
    </Tab.Navigator>

    </NavigationContainer>
   </PaperProvider>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
