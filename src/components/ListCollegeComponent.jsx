import React, { Component } from 'react';
import CollegeService from '../services/CollegeService';

class ListCollegeComponent extends Component {
    constructor(props)
    {
        super(props)

        this.state = {
            colleges: []
        }
        this.addCollege = this.addCollege.bind(this);  //binding event handler method in constructor
        this.editCollege = this.editCollege.bind(this);
        this.deleteCollege = this.deleteCollege.bind(this);
    }
    deleteCollege(id){
        CollegeService.deleteCollege(id).then( res => {
            this.setState({colleges: this.state.colleges.filter(college => college.id !== id)});
        });
    }
    editCollege(id){
         this.props.history.push(`/add-college/${id}`);
    }
    //If you want to load data from a endpoint then instantiate network request here 
    componentDidMount() //this method is invoked immediately after component is inserted into tree
    {
      CollegeService.getColleges().then((res) => {  //then() return a promise
            this.setState({ colleges: res.data});  //setting response to the colleges[]
        });
    }
    addCollege()
    {
        this.props.history.push('/add-college/-1');  //Moving from current page to destination page whose path is passed
    }
//addCollege is a event handler method that we need to bind inside a constructor, 
//we write this.addCollege and not this.addCollege() because we want handler to be a function and not a functin call
    render() {
        return (
            <div>
                <h2 className="text-center">Colleges List</h2>
                <div className="row">
                
                    <button className="btn btn-primary" onClick={this.addCollege}>Add College</button> 
                </div>
                <br></br>
                <div className="row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>College Name</th>
                                <th>Address</th>
                                <th>Nirf Rank</th>
                                <th>Actions</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                 this.state.colleges.map(
                                   college => 
                                   <tr key = {college.id}>
                                      <td>{college.name}</td>
                                      <td>{college.address}</td>
                                      <td>{college.rank}</td>
                                      <td>
                                        <button onClick={ () => this.editCollege(college.id)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCollege(college.id)} className="btn btn-danger">Delete</button>
                                      </td>
                                   </tr> 
                                 )
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        );
    }
}

export default ListCollegeComponent;