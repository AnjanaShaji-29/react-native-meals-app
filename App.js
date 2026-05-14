import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./screens/MealsOverview";
import MealDetailScreen from "./screens/MealDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Button } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import FavoritesScreen from "./screens/FavoritesScreen";
// import { Ionicons } from "@expo/vector-icons";

// const Drawer = createDrawerNavigator(); // Obj with 2 props where every props is a component

const Stack = createNativeStackNavigator(); // Obj with 2 props where every props is a component

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: "#351401" },
//         headerTintColor: "white",
//         sceneContainerStyle: { backgroundColor: "#3f2f25" },
//         drawerContentStyle: { backgroundColor: "#351401" },
//         drawerInactiveTintColor: "white",
//         drawerActiveTintColor: "#351401",
//         drawerActiveBackgroundColor: "#e4baa1",
//       }}
//     >
//       <Drawer.Screen
//         name="MealsCategories"
//         component={CategoriesScreen}
//         options={{
//           title: "All Categories",
//           drawerIcon: ({ color, size }) => (
//             <Ionicons name="list" color={color} size={size} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="favorites"
//         component={FavoritesScreen}
//         options={{
//           title: "Favorites",
//           drawerIcon: ({ color, size }) => (
//             <Ionicons name="star" color={color} size={size} />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          {/* <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          /> */}
           <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverview}
            options={
              ({route, navigation}) => {
                const catId = route.params.categoryId;
                return {
                  title: catId,
                }
              }
            }
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailScreen}
            options={{ title: "About the Meal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
