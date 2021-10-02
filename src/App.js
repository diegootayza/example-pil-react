import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import store from './redux'

import Home from './views/Home'
import SocketProducts from './views/SocketProducts'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/socket" component={SocketProducts} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default App
