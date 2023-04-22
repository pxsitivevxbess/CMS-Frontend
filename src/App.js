import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCollegeComponent from './components/ListCollegeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCollegeComponent from './components/CreateCollegeComponent';
//this app component is our root component
//Header and footer remains outside switch because they are applicable to all the components
function App() {
  return (
    <div>
      <Router>
        <div className="container">
           <HeaderComponent />   
              <div className="container">
                <Switch>
                  <Route path = "/" exact component = {ListCollegeComponent}></Route>
                  <Route exact path = "/colleges" component = {ListCollegeComponent}></Route> 
                  //step1
                  <Route exact path = "/add-college/:id" component = {CreateCollegeComponent}></Route>
                 </Switch>
              </div>
           <FooterComponent />
        </div>
      </Router>
    </div>
    
  );
}

export default App;
