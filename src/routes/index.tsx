import React, { Component, useState } from 'react';

import { View, Text } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {
    const isAuthenticated = false;
    const loading = false;

    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    );
}