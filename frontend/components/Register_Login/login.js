import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';


const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION(
    $email: String!,
    $password: String!
  ){
    createUser(
      email: $email
      password: $password
    ){
      id
    }
  }
`;

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === 'number'? parseFloat(value) : value;
    this.setState({
      [name]: val
    })
  }

  render() {
    const { email, password } = this.state;
    return (
      <Mutation mutation={CREATE_USER_MUTATION} variables={this.state}>
        {(createUser, {loading, error}) => (
          <div className="signin_wrapper">
            <form className="formBlock" onSubmit={ async e => {
              e.preventDefault();
              const res = await createUser();
            }}
            >
              <fieldset>
                <label htmlFor="email">
                  Email
                  <input 
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={this.handleChange} 
                    />      
                </label>
                <label htmlFor="password">
                  Password
                  <input 
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={this.handleChange} 
                    />      
                </label>
                <button type="submit">Submit</button>
              </fieldset>
            </form>
          </div>
      )}
    </Mutation>
    );
  }
}

export default Login;