import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import home from "./screens/home";
import ToDoList from "./screens/ToDoList";
import EditList from "./screens/EditList";
import Login from "./screens/Login";

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const AuthScreens = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};
const Screens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Byte Buider App" component={home} />
      <Stack.Screen
        name="ToDoList"
        component={ToDoList}
        options={({ route }) => {
          return {
            title: route.params.title,
            headerStyle: {
              backgroundColor: route.params.color,
            },
            headerTintColor: "white",
          };
        }}
      />
      <Stack.Screen
        name="Edit"
        component={EditList}
        options={({ route }) => {
          return {
            title: `Edit ${route.params.title} List`,
            headerStyle: {
              backgroundColor: route.params.color,
            },
            headerTintColor: "white",
          };
        }}
      />
    </Stack.Navigator>
  );
};
export default function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  return (
    <NavigationContainer>
      {isAuthenticated ? <Screens /> : <AuthScreens />}
    </NavigationContainer>
  );
}
