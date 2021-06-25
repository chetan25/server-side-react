---
title: Simple SSR React App.
excerpt: Building a simple SSR react app to learn the SSR basics.
Tools: ['Express', 'React', 'Redux', 'ReactDOM' 'Webpack']
---

### SSR APP
Simple app to practice SSR with React.

It contains: 
- API Server(Data Layer) - to serve our API data, like auth, list of user.
- Rendering Server(View Layer) - takes data and produces html. Since we use React, this would be using some react logic.
- Having a separate Rendering server, we have separation of concerns and also gives flexibility to replace the rendering server with any framework. It also provide scalability.

#### Workflow
- To render component from server side we are using the `renderToString` function of `ReactDOM`. 
- Which will render bunch of components and produce a string out of all the resulting html.
- Since node does not understand the JSX syntax we need to set up some tooling.
- We will use webpack + babel to solve this.
- We will run webpack on our server entry code and then run that.
- 
