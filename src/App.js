import React from 'react'
import './App.css'
import Homepage  from './Pages/Homepage/Homepage';
import { Switch , Route } from 'react-router-dom'
import Shoppage from './Pages/Shop/Shoppage';
import Header from './Components/Header/Header';
import signinsignup from './Pages/signin-signup/signin-signup';
import { auth } from './Firebase/Firebase.utils'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


render() {
  return (
    <div >
       <Header currentUser ={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage}/>
        <Route path='/signin' component={signinsignup} />
      </Switch>
    </div>
  );
}
}

export default App;
