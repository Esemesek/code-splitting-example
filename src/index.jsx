import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

const LoadingComponent = () => <div>Loading...</div>;

const HomeLoadable = Loadable({
    loader: () => import('./home'),
    loading: LoadingComponent
});

const OtherLoadable = Loadable({
    loader: () => import('./other'),
    loading: LoadingComponent
});

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/other">Other</Link></li>
                    </ul>
                    <Route exact path="/" component={HomeLoadable}/>
                    <Route path="/other" component={OtherLoadable}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app'),
);
