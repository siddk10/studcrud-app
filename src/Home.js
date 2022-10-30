import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import Nav from './Nav.js'

const Home=()=> {
  //state
  const[data,setData]=useState([]);
  
  //For refresh     
  const navigate = useNavigate();
  //fetch for update
    /* const handleUpdate= (id)=>{
     fetch(`http://localhost:8080/update/${id}`,{
      method:'PATCH'
    })
    navigate(0)
     } */
  //fetch for update
  const handleDelete= (id)=>{
  
    axios.delete(`http://localhost:8080/delete/${id}`)
    alert("Student Deleted")
    navigate(0)
   
   
  }

  
   function getStudents() {
   /*  const response = await fetch('http://localhost:8080/personnel');
    const da = await response.json();
    setData(da); */
 
    
    axios.get('http://localhost:8080/personnel')
            .then((response) => {
                 setData(response.data);
            })

   }
   
  useEffect(() => {
    getStudents();
  }, []);

  

  const handleClick=(student)=>{
    let { _id, name,date, email, called } =student;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Date', date);
        localStorage.setItem('Email', email);
        localStorage.setItem('Called', called)
       
  }
 
  return (
    
  <div >
    
      <Nav/>
      <br></br>
      <div class="ui container">
      <div class="ui toggle checkbox">
        <input type="checkbox" name="public"/>
        <label>Update</label>
      </div>
      </div>
      <br></br>
      
      <div class="ui container">
      <table class="ui selectable celled table">
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Date Joined</th>
          <th>E-mail</th>
          <th>Called</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
      {
      data.map((student)=>{
      return <tr key={student._id}>
         <td >{student.name}</td>
        <td >{student.date}</td>
        <td >{student.email}</td>
        <td >{student.called}</td>
        <td ><button class="ui button" onClick={()=>handleDelete(student._id)} >Delete</button></td>
        <td><Link to="/update"   class="ui button" onClick={()=>(handleClick(student))} >Update</Link></td>
        </tr>
        })
      }
        </tbody>
      </table>
      </div>
      
      
  </div>
  );
  }

export default Home;
