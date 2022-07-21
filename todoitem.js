import React ,{Fragment } from 'react'
import './todoitem.css'

const TodoItems =(props)=>{
    const {items ,deleteItem}=props;
    
    let len =items.length;
        const ListItems = len ? ( 
            items.map(it =>{
        return(
            <div key={it.id} className="List">
                <span className="name">{it.name} </span>
                <span className="age">{it.age} </span>
                <span className="action" onClick= { () => deleteItem(it.id) }>&times;</span>
            
            </div>
              )
    })
    ): (<p>There Is No Items -_- </p>)
        
    
   
    return(
        <div className="parent">
            <div className="title">
                <span className="name">Name</span>
                <span className="age">Age</span>
                <span className="action">Action</span>
            </div>
        {ListItems}
        </div> 
    )
        
    
}
export default TodoItems