import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native';
import { tabsOptions } from '../utils/helper';
import React from 'react';
import { styles } from './styles';
import HomeStack from './home';

type TRootTabsParamList = {
  HomeStack: undefined;
  RosterStack: undefined;
  ChatStack: undefined;
  ProfileStack: undefined;
};

type RouteProp = Partial<Route<string>>;
type IScreenOptions = {
  route: RouteProp;
};

export type TRootTabsNavigationProp = BottomTabNavigationProp<TRootTabsParamList>;

const Tab = createBottomTabNavigator<TRootTabsParamList>();
const tabOptions = (route: RouteProp, screen: string) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const show = routeName === screen || routeName === undefined;
  return {
    ...(show ? {} : { tabBarStyle: { display: 'none' } }),
    headerShown: false,
  };
};

function TabsStack() {
  const jwt = true;
  const screenOptions = ({ route }: IScreenOptions) => tabsOptions({ route, jwt });
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({ route }) => ({
          ...tabOptions(route, 'Home'),
          ...(!jwt ? { tabBarStyle: styles.display } : {}),
          tabBarTestID: 'tabBarHome',
        })}
      />
    </Tab.Navigator>
  );
}
export default TabsStack;
