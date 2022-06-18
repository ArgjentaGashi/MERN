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
        <div>
          <label htmlFor="surname">Last Name</label>
          <input 
            type="text" 
            name="surname" 
            onChange={ (e) => setSurname(e.target.value) }
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name="email" 
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>
        <div>
          <label htmlFor="confirmPassord">Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword" 
            onChange={ (e) => setConfirmPassword(e.target.value) }
          />
        </div>
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