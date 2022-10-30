
import Form from './Form'
import Home from './Home';
import UpdateForm from './UpdateForm'
import {
    
   BrowserRouter as Router,Navigate, 
    Route,
   Routes
  } from "react-router-dom";

const App=()=>{
    return(
        <div>
            
            <Routes>
                   
                    <Route exact path="/" element={ <Home/> } />
                    <Route exact path="/add" element={ <Form/> } />
                    <Route exact path="/update" element={ <UpdateForm/> } />
                    <Route path="*" element={<Navigate to="/" replace />}
    />
            </Routes>
            
        </div>
    )
} 
export default App