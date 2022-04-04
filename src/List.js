import React from 'react'
import "./List.css";


function List(props){

    return( 
        <div>
            {props.itemList.map(itemObj =>{
                return(
                    <div className='item' >  <p> {itemObj} </p>
                     <button>x</button>
                      </div>
                ) 
            })}
        </div>
    )
}
export default List;