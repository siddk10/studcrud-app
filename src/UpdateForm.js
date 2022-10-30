import React from "react";
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'

const UpdateForm=(props)=>{
   
    let navigate = useNavigate();
    const[id,setId]=useState(null);
    const[name,setName]=useState('');
    const[date,setDate]=useState('');
    const[email,setEmail]=useState('');
    const[called,setCalled]=useState('');

    useEffect(() => {
      setId(localStorage.getItem('ID'))
      setName(localStorage.getItem('Name'));
      setEmail(localStorage.getItem('Email'));
      setDate(localStorage.getItem('Date'))
      setCalled(localStorage.getItem('Called'));
      }, [localStorage]);

    const handleUpdate=()=>{
        const updateURL = `http://localhost:8080/update/${id}` //Our previously set up route in the backend
        fetch(updateURL, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: name,
                date:date,
                email:email,
                called:called
                
            })
        })
    }
   
    const handleSubmit=(e)=> { // Once the form has been submitted, this function will post to the backend
        e.preventDefault()
        handleUpdate();
        alert("Student Updated")
     
        navigate('/')
        
          
    
        
      }
      
     return(
        <div>
        {console.log(name)}
        
        <br/>
        <div class="ui container">
        
          <form class="ui form" onSubmit={handleSubmit}>
            <div class="fields">
                
                <div class="eight wide field">
                    <label>First Name</label>
                    <input  required type="text" value={name}    onChange={e => setName(e.target.value)} name="first-name" placeholder="First Name"/>
                </div>
                <div   class="field">
                  <label>Date Joined</label>
                  <input  required  type="date" value={date} onChange={e => setDate(e.target.value)} name="last-name" placeholder="Last Name"/>
                </div>
                <div class="field">
                  <label>E-mail</label>
                  <input requried  type="email"  value={email} onChange={e => setEmail(e.target.value)}  name="last-name" placeholder="Email"/>
                </div>              
                <div class="field">
                  <label>Called</label>
                  <input required  type="text" value={called}     onChange={e => setCalled(e.target.value)} name="last-name" placeholder="Called"/>
                </div> 
                
            </div>
     
            <button class="ui button" type="submit">Submit</button> 
        </form>
         </div>
       
    </div>
    )
}
export default UpdateForm