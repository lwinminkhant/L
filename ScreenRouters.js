import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import LogoutScreen from "./screens/logout";
import MidScreen from "./screens/midscreen";
import SignupForm from "./screens/signup";

export const SCREENS = {
    LOGIN: {
        name: 'Login',
        component: LoginScreen,
    },
    SIGNUP:{
        name: 'Signup',
        component: SignupForm,
    },
    HOME_TAB: {
        name: 'Home',
        component: HomeScreen,
    },
    MID_TAB: {
        name: 'Mid',
        component: MidScreen,
    },
    LOGOUT_TAB: {
        name: 'Logout',
        component: LogoutScreen,
    }
}