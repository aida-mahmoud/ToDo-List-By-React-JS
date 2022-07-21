import React,{Component} from 'react'
import './Additem.css'
class AddItem extends Component{
    state ={ 
        name:'',
        age:''
    }
handleChange =(e)=>{
    this.setState({
        [e.target.id] : e.target.value
    })
}
handleSubmit =(e)=>{
        e.preventDefault();
    if(e.target.name.value==='' ||e.target.age.value==='' ){
         e.target.name.className="error";
        e.target.age.className="error";
        return false;
    }
    else{
        this.props.addItem(this.state);
        
         e.target.name.className="";
        e.target.age.className="";
        
     this.setState({
            name:'',
            age:''
        })
    }
   
}
    render(){
        return(
            <div className="parent">
            <form onSubmit={this.handleSubmit}>
            
                <input type="text" className="" placeholder="Enter Your Name..." id="name" onChange={this.handleChange} value={this.state.name}/>
                <input type="number" placeholder="Enter Your Age..." id="age" onChange={this.handleChange} value={this.state.age}/>
                <input type="submit" value="Add" id="sub"/>
                </form>
            </div>
         )
    }
}
export default AddItem