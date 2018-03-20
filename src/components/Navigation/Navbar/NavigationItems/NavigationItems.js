import React from 'react';
import './NavigationItems.css';
import RouteNavItem from './RouteNavItem/RouteNavItem';

const navigationItems = (props) => (
    <div>
        <ul id='navigationItems' className="NavigationItems">
                <RouteNavItem id='home' to="/">Paslaugos</RouteNavItem>
                <RouteNavItem id='supplierkList' to="/suppliers">Teikėjai</RouteNavItem>
        </ul>
    </div>

);

export default navigationItems;
