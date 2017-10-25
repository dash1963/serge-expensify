
import 'react-dates/initialize'
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/initialize';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense }     from './actions/expenses';
import { setTextFilter }     from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

console.log('Test');

 store.dispatch(addExpense({description: 'Water Bill', amount: 10000, createdAt: -121000}));
 store.dispatch(addExpense({description: 'Gas Bill', amount: 5000, createdAt: 121000}));
 store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: -121000}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
       <AppRouter /> 
    </Provider>
    );
ReactDOM.render(jsx, document.getElementById('app'));


