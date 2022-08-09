import React from "react";
import { Text, Platform } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen"

const RestaurantStack = createStackNavigator();


export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{
            headerShown: false,
            ...TransitionPresets.ModalPresentationIOS,
            // ...TransitionPresets.RevealFromBottomAndroid,
            }}>
            <RestaurantStack.Screen 
              name='Restaurants'
              component={RestaurantsScreen}
            />
            <RestaurantStack.Screen 
              name='RestaurantDetail'
              component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    )
}
