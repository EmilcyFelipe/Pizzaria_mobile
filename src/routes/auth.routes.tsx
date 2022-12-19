import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';

const Stack = createNativeStackNavigator();


export default function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SignIn' options={{ headerShown: false }} component={SignIn} />
        </Stack.Navigator>
    )
}