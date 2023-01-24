import {createNavigationContainerRef} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();
export const globalNavigate = (name, params) => {
  if (navigationRef?.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export default globalNavigate;
