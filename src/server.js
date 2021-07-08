/**
 *  common js pattern
 * */
// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/home').default;

// since we are runnign through webpack we can use es6
import 'babel-polyfill';
import express from 'express';
import renderApp from './helpers/renderer';
import createServerStore from './helpers/store-server';
import Routes from './client/routes';
import { matchRoutes } from 'react-router-config';

const app = express();
   
// expose public for access
app.use(express.static('public'));

app.get('*', (req, res) => {
    // creating store, so we have a handle on store and we can detect data loading.
    const store = createServerStore();
    
    const components = matchRoutes(Routes, req.path);
    // loadData will return the underlyig promise
    const pendingPromises = components.map(({route}) => {
        if(route.loadData) {
            return route.loadData(store);
        }
        return null;
    });
    
    Promise.all(pendingPromises).then((success) => {
        const html = renderApp(req, store);
   
        res.send(html);
    });
});

app.listen(3000, () => {
    console.log("listening on port 3000");
})