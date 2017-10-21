// #1 Import React lib
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

// #2 Create Component
const App = () => {
    return (
        <div>
            <h1>Image List:</h1>
            <ImageList/>
        </div>
    )
};

// #3 Render Component
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
