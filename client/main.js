// #1 Import React lib
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// Axios Http GET

// #2 Create Component
const App = () => {
    return (
        <div>
            <ImageList/>
        </div>
    )
};

// #3 Render Component
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
        .then(response => console.log(response))
});
