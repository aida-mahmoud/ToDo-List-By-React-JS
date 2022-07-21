import React , { Component }from 'react';
import TodoItems from './components/todoItem/todoitem'
import AddItem from './components/AddItem/Additem'
import './App.css'

class App extends Component  {
   state= {
        items : [
            {id : 1, name :"Aida" ,age:24},
            {id : 2, name :"Omnia" ,age:21},
            {id : 3, name :"Malak" ,age:15}

        ]
    }
    deleteItem = (id)=>{
        let items =this.state.items.filter(item =>{
            return item.id !== id 
        }) 
        this.setState({items})
         
    }
    addItem=(item)=>{
        item.id=Math.random()*10;
        let items =this.state.items;
        items.push(item);
        this.setState({items});
       
        console.log({items});
    }
    render() {
        
         return (
    <div className="App">
             <h1>ToDo List</h1>
            <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
             <AddItem addItem={this.addItem}/>
    </div>
  );
    }
}

export default App;
