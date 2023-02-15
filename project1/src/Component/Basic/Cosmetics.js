import React , {useState}from 'react'
import './Styles.css'
import Menu from './MenuApi'
import Menucard from './Menucard'
const Cosmetics = () => {
  const[menuData,setmenuData]=useState(Menu);
  console.log(menuData)
  const filteritem=(category)=>{
    const updatelist=Menu.filter((curElem)=>{
      return curElem.category===category
    });
    setmenuData(updatelist)
  }
  return (
    <>
    <nav className='navbar'>
      <button className='btn-group__item ' onClick={()=>filteritem("Maybelline")}>Maybelline</button>
      <button className='btn-group__item ' onClick={()=>filteritem("MAC")}>MAC</button>
      <button className='btn-group__item ' onClick={()=>filteritem("Nykaa")}>Nykaa</button>
      <button className='btn-group__item ' onClick={()=>filteritem("Garnier")}>Garnier</button>
      <button className='btn-group__item ' onClick={()=>filteritem("SUGAR Cosmetics")}>SUGAR Cosmetics</button>
      <button className='btn-group__item ' onClick={()=>filteritem("Lakme")}>Lakme</button>
      <button className='btn-group__item ' onClick={()=>filteritem("L’Oreal Paris")}>L’Oreal Paris</button>
      <button className='btn-group__item ' onClick={()=>setmenuData(Menu)}>All</button>
    </nav>
    <Menucard menuData={menuData} />
    </>
  )
}  

export default Cosmetics ;