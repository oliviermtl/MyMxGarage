import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { useFluxible } from '../utils/hooks';

import React from 'react';
import { StatusBar, Platform } from 'react-native';

import queryClient, { asyncStoragePersister } from '../utils/query';

import { colors, images } from '../constants';
import { navigationRef } from '../utils/navigation';
import TabsStack from './tabs';
import { invisibleStackHeaderOptions } from '../utils/helper';

const Stack = createStackNavigator();

function App() {
  const { initialized } = useFluxible({ items: ['initialized'] });

  React.useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    Platform.OS === 'android' && StatusBar.setBackgroundColor(colors.white);
  }, []);

  if (!initialized) {
    return null;
  }

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}
    >
      <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" />
        <Stack.Navigator
          screenListeners={{
            state: () => {
              const route = navigationRef?.current?.getCurrentRoute();
              if (route?.name) {
                const name =
                  {
                    Popup: `${route?.name}_${route?.params?.title}`,
                    AuthSuccess: `${route?.name}_${route?.params?.type}`,
                    PackageIntro: `${route?.name}_${route?.params?.product}`,
                    PackageDetail: `${route?.name}_${route?.params?.product}`,
                    BookService: `${route?.name}_${route?.params?.product}`,
                    BookServiceConfirmation: `${route?.name}_${route?.params?.product}`,
                    BookIntro: `${route?.name}_${route?.params?.product}`,
                  }[route?.name] ?? route?.name;
              }
            },
          }}
        >
          <Stack.Screen
            name="TabsStack"
            component={TabsStack}
            options={invisibleStackHeaderOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistQueryClientProvider>
  );
}

export default App;
