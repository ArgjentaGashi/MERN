import React, { useState } from 'react';

const User = (props) => {
  const [ name, setName ] = useState("");
  const [ surname, setSurname ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <form className="form-style" >
        <div >
          <label htmlFor="name">First Name</label>
          <input 
            type="text" 
            name="name"
            onChange={ (e) => setName(e.target.value) }
          />
        </div>
        {name.length < 2 && name.length > 0 ?  <p>First Name must be at least 2 characters</p> : ""}
        <div>
          <label htmlFor="surname">Last Name</label>
          <input 
            type="text" 
            name="surname" 
            onChange={ (e) => setSurname(e.target.value) }
          />
        </div>
        {surname.length < 2 && surname.length > 0 ? <p>Last Name must be at least 2 characters</p> : ""}
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name="email" 
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        {email.length < 5 && email.length > 0 ? <p>Email must be at least 5 characters</p> : ""}
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>
        {password.length < 8 && password.length > 0 ?  <p>Password must be at least 8 characters</p> : ""}
        <div>
          <label htmlFor="confirmPassord">Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword" 
            onChange={ (e) => setConfirmPassword(e.target.value) }
          />
        </div>
        {confirmPassword != password ? <p>Passwords must match</p> : ""}
      </form>

      <div className='form-data-style'>
        <h3>Your Form Data</h3>
        <p>
          <label>First Name: { name }</label>
        </p>
        <p>
          <label>Last Name: { surname }</label>
        </p>
        <p>
          <label>Email: { email }</label>
        </p>
        <p>
          <label>Password: { password }</label>
        </p>
        <p>
          <label>Confirm Password: { confirmPassword }</label>
        </p>
      </div>
    </div>
  )
}

export default User;