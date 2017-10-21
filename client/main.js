// #1 Import React lib
import React from 'react';
import ReactDOM from 'react-dom';

// #2 Create Component
const App = () => {
    return (
        <div>
            React App #2
        </div>
    )
};

// #3 Render Component
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
