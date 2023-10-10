import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FilmesDetalhes from './screens/cursos/Cursos';
import Cursos from './screens/cursos/Cursos';
import CursosStack from './screens/cursos/CursosStack';


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
            <MaterialCommunityIcons name="movie-open" size={26} />
          ),
        }}
      />
    <Tab.Screen
        name="Diciplinas"
        component={CursosStack}
        options={{
      
          tabBarIcon: () => (
            <MaterialCommunityIcons name="movie-open" size={26} />
          ),
        }}
      />
    <Tab.Screen
        name="Alunos"
        component={CursosStack}
        options={{
      
          tabBarIcon: () => (
            <MaterialCommunityIcons name="movie-open" size={26} />
          ),
        }}
      />
    <Tab.Screen
        name="Professores"
        component={CursosStack}
        options={{
      
          tabBarIcon: () => (
            <MaterialCommunityIcons name="movie-open" size={26} />
          ),
        }}
      />
    <Tab.Screen
        name="Turmas"
        component={CursosStack}
        options={{
      
          tabBarIcon: () => (
            <MaterialCommunityIcons name="movie-open" size={26} />
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
