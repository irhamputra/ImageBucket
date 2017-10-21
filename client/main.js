// #1 Import React lib
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// #2 Create Component
class App extends Component {

    constructor(props){
        super(props);

        this.state = { images: [] }
    }

    componentWillMount(){
        // Axios HTTP Get
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
            .then(response => this.setState({ images: response.data.data }))
    }

    render(){
        return (
            <div>
                <h2 className="text-center page-header">Image Bucket</h2>
                <h4 className="text-center">Viral</h4>
                <ImageList images={ this.state.images }/>
            </div>
        )
    }
}

// #3 Render Component
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
