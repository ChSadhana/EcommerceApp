import React from 'react'
import './App.css'
import Homepage  from './Pages/Homepage/Homepage';
import { Switch , Route } from 'react-router-dom'
import Shoppage from './Pages/Shop/Shoppage';





function App ()  {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage}/>
      </Switch>
    </div>
  );
}

export default App;
