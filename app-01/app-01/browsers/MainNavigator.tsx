import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import FormularioScreen from "../screens/FormularioScreen";
import ImagenesScreen from "../screens/ImagenesScreen";

const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Formulario" component={FormularioScreen} ></Tab.Screen>
            <Tab.Screen name="Imagenes" component={ImagenesScreen}/>
        </Tab.Navigator>
    )
}

export default function NavegadorPrincipal(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}