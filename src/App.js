import React from 'react'
import './App.css'
import Homepage  from './Pages/Homepage/Homepage';
import { Switch , Route } from 'react-router-dom'
import Shoppage from './Pages/Shop/Shoppage';
import Header from './Components/Header/Header';
import signinsignup from './Pages/signin-signup/signin-signup';





function App ()  {
  return (
    <div >
       <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage}/>
        <Route path='/signin' component={signinsignup} />
      </Switch>
    </div>
  );
}

export default App;
