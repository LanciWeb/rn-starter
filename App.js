import ListScreen from './src/screens/ListScreen';
import RGBScreen from './src/screens/RGBScreen';
import HomeScreen from './src/screens/HomeScreen';
import TextScreen from './src/screens/TextScreen';
import ImageScreen from './src/screens/ImageScreen';
import ColorScreen from './src/screens/ColorScreen';
import { createAppContainer } from 'react-navigation';
import CounterScreen from './src/screens/CounterScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import { createStackNavigator } from 'react-navigation-stack';
/**
 * list of the possible route names.
 * we assign a component to each key
 */
const routeConfigMap = {
  RGB: RGBScreen,
  Home: HomeScreen,
  List: ListScreen,
  Text: TextScreen,
  Image: ImageScreen,
  Color: ColorScreen,
  Counter: CounterScreen,
  Components: ComponentsScreen,
};

/**
 * Configuration of the route stack
 */
const navigationConfig = {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'App',
  },
};

const navigator = createStackNavigator(routeConfigMap, navigationConfig);

export default createAppContainer(navigator);
