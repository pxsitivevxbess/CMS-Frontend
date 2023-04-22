import React, { Component } from 'react';
import CollegeService from '../services/CollegeService';

class CreateCollegeComponent extends Component {
   constructor(props)
   {
      super(props)

      this.state = {
         //step:2
         id: this.props.match.params.id,
          name: '',
          address: '',
          rank: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeRankHandler = this.changeRankHandler.bind(this);
        this.saveCollege = this.saveCollege.bind(this);
   }
   //step:3
   //Fetching the college details with given id from the db using API
   componentDidMount(){
      //step:4
      if(this.state.id == -1){
         return 
      }else{
      CollegeService.getCollegeById(this.state.id).then((res) =>{
         let college = res.data;
         this.setState({name: college.name,
            address: college.address,
            rank: college.rank
         });
      });
   }
   }
   saveCollege= (e) => {
    e.preventDefault(); //Prevents default behaviour of eventsx
    let college = {name: this.state.name, address: this.state.address, rank: this.state.rank};
    console.log('college => '+ JSON.stringify(college));

    //step:5
    if(this.state.id==-1){
      CollegeService.createCollege(college).then(res =>{
         this.props.history.push('/colleges');
      });
    }else{
     CollegeService.updateCollege(college,this.state.id).then((res)=>{
      this.props.history.push('/colleges');
     });
    }
    
   }
   //Event Handler for Name
   changeNameHandler= (event) => {
    this.setState({name: event.target.value});
   }
   //Event Handler for Address
   changeAddressHandler= (event) => {
    this.setState({address: event.target.value});
   }
   //Event Handler for Rank
   changeRankHandler= (event) => {
    this.setState({rank: event.target.value});
   }
   cancel(){
    this.props.history.push('/colleges');
   }
   getTitle(){
      if(this.state.id == -1){
      return  <h3 className="text-center"> Add College </h3>
   }else {
       return  <h3 className="text-center"> Update College </h3>
      }

   }

    render() {
       return (
            <div>
               <div className="container">
                  <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3"> 
                       {
                        this.getTitle()
                       }
                       <div className="card-body">
                          <form>
                            <div className="card-body">
                                <label> Name: </label>
                                <input placeholder="Name" name="name" className = "form-control"
                                value={this.state.name} onChange={this.changeNameHandler} /> 
                            </div>
                            <div className="card-body">
                                <label> Address: </label>
                                <input placeholder="Address" name="address" className = "form-control"
                                value={this.state.address} onChange={this.changeAddressHandler} /> 
                            </div>
                            <div className="card-body">
                                <label> Nirf Rank: </label>
                                <input placeholder="Rank" name="rank" className = "form-control"
                                value={this.state.rank} onChange={this.changeRankHandler} /> 
                            </div>
                            <button className="btn btn-success" onClick={this.saveCollege}>Save</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                          </form>
                       </div>
                    </div>

                  </div>
               </div>
            </div>
        );
    }
}

export default CreateCollegeComponent;