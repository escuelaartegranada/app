
import React from 'react';
import type { Expense, Category } from './types';
import { HousingIcon, FoodIcon, TransportIcon, EntertainmentIcon, HealthIcon, ShoppingIcon, UtilitiesIcon } from './components/icons';

export const CATEGORIES: Category[] = [
    { id: 'vivienda', name: 'Vivienda', color: 'bg-blue-500', icon: (props) => <HousingIcon {...props} /> },
    { id: 'comida', name: 'Comida', color: 'bg-green-500', icon: (props) => <FoodIcon {...props} /> },
    { id: 'transporte', name: 'Transporte', color: 'bg-yellow-500', icon: (props) => <TransportIcon {...props} /> },
    { id: 'ocio', name: 'Ocio', color: 'bg-pink-500', icon: (props) => <EntertainmentIcon {...props} /> },
    { id: 'salud', name: 'Salud', color: 'bg-red-500', icon: (props) => <HealthIcon {...props} /> },
    { id: 'compras', name: 'Compras', color: 'bg-purple-500', icon: (props) => <ShoppingIcon {...props} /> },
    { id: 'servicios', name: 'Servicios', color: 'bg-indigo-500', icon: (props) => <UtilitiesIcon {...props} /> },
];

const today = new Date();
const daysAgo = (days: number) => new Date(today.getTime() - days * 24 * 60 * 60 * 1000).toISOString();

export const SAMPLE_EXPENSES: Expense[] = [
    { id: 1, name: 'Alquiler', amount: 800, category: 'vivienda', date: daysAgo(20) },
    { id: 2, name: 'Supermercado', amount: 120.50, category: 'comida', date: daysAgo(5) },
    { id: 3, name: 'Abono Transporte', amount: 54.60, category: 'transporte', date: daysAgo(15) },
    { id: 4, name: 'Cine', amount: 25, category: 'ocio', date: daysAgo(3) },
    { id: 5, name: 'Farmacia', amount: 30.25, category: 'salud', date: daysAgo(10) },
    { id: 6, name: 'Ropa', amount: 75, category: 'compras', date: daysAgo(8) },
    { id: 7, name: 'Factura Electricidad', amount: 65.80, category: 'servicios', date: daysAgo(12) },
    { id: 8, name: 'Restaurante', amount: 45, category: 'comida', date: daysAgo(2) },
    { id: 9, name: 'Gasolina', amount: 50, category: 'transporte', date: daysAgo(1) },
    { id: 10, name: 'Suscripción Streaming', amount: 12.99, category: 'ocio', date: daysAgo(25) },
    { id: 11, name: 'Café', amount: 3.50, category: 'comida', date: daysAgo(0) },
];
   