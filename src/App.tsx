import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import {Route, Switch} from 'react-router-dom';
import Contactpage from './pages/Contactpage';
import Productspage from './pages/Productspage';
import Error from './pages/Error';

function App() {
  return (
    <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/contact' component={Contactpage} />
          <Route exact path='/all' component={Productspage} />
          <Route path='*' component={Error} />
        </Switch>
    </div>
  );
}

export default App;
/* 
https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/
*/