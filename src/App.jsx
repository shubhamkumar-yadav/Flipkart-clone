import React from 'react';
import { Header } from './components/header/Header';
import { Home } from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Cart } from './components/cart/Cart.jsx';
import { TemplateProvider } from './templates/TemplateProvider.js';
import { ContextProvider } from './context/ContextProvider.jsx';
import { DetailView } from './components/product/DetailView.jsx';
import { Box } from '@material-ui/core';
import './App.css';
const App = () => {
    return (
        <TemplateProvider>
            <ContextProvider>
                <BrowserRouter>
                    <Header />
                    <Box style={{marginTop:'55px'}}>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/cart' component={Cart} />
                            <Route exact path='/product/:id' component={DetailView} />
                        </Switch>
                    </Box>
                </BrowserRouter>
            </ContextProvider>
        </TemplateProvider>
    );
};
export { App };