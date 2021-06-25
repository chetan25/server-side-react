// common js pattern
// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/home').default;

// since we are runnign through webpack we can use es6
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom';
import Home from './client/components/home';

const app = express();

app.get('/', (req, res) => {
   const content = renderToString(<Home />);

   res.send(content);
});

app.listen(3000, () => {
    console.log("listening on port 3000");
})