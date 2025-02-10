import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PageHome from "../pages/home/home";
import Page2 from '../pages/cosmopolitano'

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "white",
            borderTopWidth: 1,
            borderColor: "#35c23c",
            height: 75,
            paddingTop: 5,
            boxShadow:
              "#35c23c -10px -30px 5px -30px inset, rgba(0, 0, 0, 0.3) 0px -18px 36px -36px inset",
          },
          tabBarActiveTintColor: "#35c23c",
          tabBarInactiveTintColor: "black",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={PageHome}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size}></Ionicons>
            ),
          }}
        />
        <Tab.Screen
          name="Investimento"
          component={Page2}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="analytics" color={color} size={size}></Ionicons>
            ),
          }}
        />
        // <Tab.Screen
        //   name="Configurações"
        //   component={PageHome}
        //   options={{
        //     tabBarIcon: ({ color, size }) => (
        //       <Ionicons name="cog-outline" color={color} size={size}></Ionicons>
        //     ),
        //   }}
        // />
        // <Tab.Screen
        //   name="Cashback"
        //   component={PageHome}
        //   options={{
        //     tabBarIcon: ({ color, size }) => (
        //       <Ionicons name="bag-outline" color={color} size={size}></Ionicons>
        //     ),
        //   }}
        // />
        // <Tab.Screen
        //   name="Todos"
        //   component={PageHome}
        //   options={{
        //     tabBarIcon: ({ color, size }) => (
        //       <Ionicons
        //         name="ellipsis-horizontal-circle-outline"
        //         color={color}
        //         size={size}
        //       ></Ionicons>
        //     ),
        //   }}
        // />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
