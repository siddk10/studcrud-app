import {Link,useLocation} from "react-router-dom"


const Nav=()=>{
    const location = useLocation();
    
    
    return(
        <div>
            <div class="ui stackable menu">
                 <div class="header item">
                    Student 
                 </div>
                 <Link to="/" class={"item "+ (location.pathname==="/" ? 'active' : '')}>Home</Link>
                 <Link to="/add" class={"item "+ (location.pathname==="/add" ? 'active' : '')}>Add Student</Link>
            </div>
	        
    
        </div>
    )
}
export default Nav