import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ViewPost from '../screens/viewPost';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Positive news!',
    }
  },
  ViewPost: {
    screen: ViewPost,
    navigationOptions: {
      title: 'View post',
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;


