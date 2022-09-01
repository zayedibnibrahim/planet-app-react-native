import { useFonts } from 'expo-font'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import Home from './src/screens/Home'
import Details from './src/screens/Details'

const Stack = createNativeStackNavigator()

export default function App() {
  const [loaded] = useFonts({
    AntonioMedium: require('./assets/fonts/Antonio-Medium.ttf'),
    SpartanBold: require('./assets/fonts/Spartan-Bold.ttf'),
    SpartanRegular: require('./assets/fonts/Spartan-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  )
}
