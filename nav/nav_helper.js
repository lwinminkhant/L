import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function getNavigation() {
  return navigationRef;
}

export function getRoute() {
  return getNavigation()?.getCurrentRoute();
}

export function goBack() {
  const currentRoute = getRoute()?.name;
  if (currentRoute === 'HomeScreen') {
    //do something
  } else {
    if (getNavigation().isReady()) {
      getNavigation()?.canGoBack() && getNavigation(true)?.goBack();
    }
  }
}

export function replace(routeName, params) {
  getNavigation(true)?.dispatch(StackActions.replace(routeName, params));
}

export function jumpTo(routeName) {
  getNavigation(true)?.dispatch(TabActions.jumpTo(routeName));
}

export function navigate(routeName, params) {
  if (navigationRef.isReady()) {
    getNavigation().navigate(routeName, params);
  } else {
    
  }
}