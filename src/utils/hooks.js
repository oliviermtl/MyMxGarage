import React from 'react';
import {updateStore, useGlobalStore} from '../../globalstore';
import useAsyncEffect from 'use-async-effect';
import {getUser} from '../services/api';

export function useFluxible(props) {
  const items = props?.items ?? ['user', 'jwt'];
  const refreshUser = props?.refreshUser ?? false;
  const callback = props?.callback ?? [];

  const store = useGlobalStore(
    React.useCallback(states => {
      const obj = {};
      for (let i = 0; i < items.length; i++) {
        obj[items[i]] = states[items[i]];
      }

      return obj;
    }, []),
  );

  useAsyncEffect(async () => {
    if (refreshUser) {
      const response = await getUser({jwt: store.jwt});
      response.ok && updateStore({user: response.user});
    }
  }, callback);

  return store;
}
