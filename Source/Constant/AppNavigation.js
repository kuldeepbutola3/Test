import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import HomeScreen1 from '../Screens/HomeScreen1';

import Tab1 from '../Screens/TabbarScreens/Tab1';
import Tab2 from '../Screens/TabbarScreens/Tab2';
import Tab3 from '../Screens/TabbarScreens/Tab3';
import SearchResults from '../Screens/TabbarScreens/SearchScreens/SearchResults';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Tab4 from '../Screens/TabbarScreens/Tab4';

export default AppNavigation => {
  const Tab = createTab();

  const AppNavigator = createStackNavigator(
    {
      SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
          header: null,
        },
        // navigationOptions: () => {

        // },
      },
      Home: {
        screen: HomeScreen,
        navigationOptions: () => {},
      },
      Home1: HomeScreen1,
      Tab: {
        screen: Tab,
        navigationOptions: {
          header: null,
        },
      },
    },
    {
      initialRouteName: 'SplashScreen',
      //    'SplashScreen',
      // initialRouteKey: 'route1',
      initialRouteParams: {
        // key: 'a',
        // routeName: 'a',
      },
      defaultNavigationOptions: {
        // headerBackground: 'red',
      },
      navigationOptions: {
        headerTitle: 'hhh',
      },
      paths: {
        routeName: 'a',
      },
    },
  );

  const app = createAppContainer(AppNavigator);
  return app;
};

export const createTab = () => {
  const AppNavigators = createBottomTabNavigator({
    Tab1: {
      screen: createStackNavigator(
        {
          // Home: {
          //     screen: HomeScreen,
          // },
          // PayPal: PayPal,
          Tab1: {
            screen: Tab1,
            navigationOptions: {
              header: null,
            },
          },
          Search: {
            screen: SearchResults,
            navigationOptions: {
              header: null,
            },
          },
          Home3: {
            screen: HomeScreen,
            navigationOptions: {
              header: null,
            },
          },
        },
        {
          // key: 'b',
          // routeName: 'b',
          initialRouteName: 'Tab1',
        },
      ),

      navigationOptions: {
        title: 'Latest',
        header: null,
        // tabBarIcon: ({tintColor}) => (
        //   <Icon name="microchip" size={17} color={tintColor} />
        // ),
      },
    },
    Tab2: {
      screen: Tab2,
      navigationOptions: {
        tabBarLabel: 'My safety',
        header: null,
      },
    },
    Tab3: {
      screen: Tab3,
      navigationOptions: {
        tabBarLabel: 'Protect My Loved ones',
        header: null,
      },
    },
    Tab4: {
      screen: Tab4,
      navigationOptions: {
        tabBarLabel: 'Settings',
        header: null,
      },
    },
  });
  return AppNavigators;
};
