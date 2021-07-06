/**
 *  common js pattern
 * */
// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/home').default;

// since we are runnign through webpack we can use es6
import express from 'express';
import renderApp from './helpers/renderer';

const app = express();

// expose public for access
app.use(express.static('public'));

app.get('*', (req, res) => {
   const html = renderApp(req);
   
   res.send(html);
});

app.listen(3000, () => {
    console.log("listening on port 3000");
})