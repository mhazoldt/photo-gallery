import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import Home from './components/Home';
import Album from './components/Album'
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/combined'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const store = createStore(reducer, {photos: {}, currentAlbum: '', randomPhoto: ''})


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/:album_name" component={Album} />
                    <Route path="/" component={Home} />
                </Switch>
            </App>
        </BrowserRouter> 
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
