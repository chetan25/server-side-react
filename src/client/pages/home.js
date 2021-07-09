import React from 'react';


const HomePage = () => {
    return <div>
         <div>Home Component Is here</div>
         <button onClick={() => console.log('hello')}>Click</button>
    </div>
}

export default {
    component: HomePage
};