import React from 'react';
import './signIn.styles.scss'
import FormInput from '../../Components/Form/FormInput'
import CustomButton from '../../Components/CustomButton/CustomButton'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
    
        this.setState({ email: '', password: '' });
      };
    
      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };
    render(){
        return(
            <div className='signin'>
                <h1>I already Have an Account</h1>
                <span>Sign in with Email and Password </span>
                <form onSubmit={this.handlesubmit}>
                <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <CustomButton type='submit'> Sign in </CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;
