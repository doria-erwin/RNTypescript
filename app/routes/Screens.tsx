import Login from './Login';
import Modal from './Modal';
// ROUTE IMPORT CODE GENERATOR INDICATOR DO NOT DELETE

// Drawer
import DrawerNavigation from './DrawerNavigation';

import { screenConfig } from './config';

/** ---------------------SCREENS--------------------- */

export const stackScreens = [
    { name: 'Login', component: Login, options: screenConfig }, // STACK SCREEN ENTRY CODE GENERATOR INDICATOR DO NOT DELETE
    {
        name: 'Drawer',
        component: DrawerNavigation,
        options: { animationEnabled: false, headerShown: false },
    },
];

export const modalScreens = [
    { name: 'Modal', component: Modal }, // MODAL SCREEN ENTRY CODE GENERATOR INDICATOR DO NOT DELETE
];
