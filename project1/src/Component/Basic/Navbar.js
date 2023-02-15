import React from 'react'

const Navbar = ({filteritem,menuList}) => {
  return (
    <div>
         <nav className='navbar'>
    <div className='btn-group'>
        {menuList.map((curElem)=>{
            return(
            <button className='btn-group__item ' onClick={()=>filteritem(curElem)}>{curElem}</button>
            );
        })}
   
    </div>
     
   
    </nav>
    </div>
  )
}

export default Navbar