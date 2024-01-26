import React, { useState } from 'react'

const ObjectHook = () => {

    const [name, setname]=useState({firstname: "", lastname: ""});


  return (
    <div>
        <p>Here Wea are going to define the useState hook as a object</p>
        {/* <input type="text" id='username' onChange={e=> setname({firstname: e.target.value})}/>
        <label htmlFor="username">First Name</label>
        <input type="text" id='lastname' onChange={e=> setname({lastname: e.target.value})}/>
        <label htmlFor="lastname">Last Name</label> */}
        
        {/* so when we use it like the above then when the lastname is changed then it used to forget abt the firstname and simmilarly when the firstname is changed it forget abt the lastname */}

         <input type="text" id='username' onChange={e=> setname({...name, firstname: e.target.value})}/>
        <label htmlFor="username">First Name</label>
        <input type="text" id='lastname' onChange={e=> setname({...name,lastname: e.target.value})}/>
        <label htmlFor="lastname">Last Name</label>
        <button>Submit</button>

        <p>first Name: {name.firstname}</p>
        <p>lastname: {name.lastname}</p>
    </div>

    // so it will change the required fields only and updates the required fields
    
  )
}

export default ObjectHook
