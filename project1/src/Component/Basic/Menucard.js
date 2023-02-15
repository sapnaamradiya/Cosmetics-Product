import React from 'react'

const Menucard = ({menuData,}) => {
    console.log(menuData,)
  return (
    <>
    <section className="main-card--cointainer">
{menuData.map((curElem)=>{
    return(

        <div className="card-container" key={curElem.id}>
      <div className="card">
        <div className="card-body">
          <sapn id="c1" className="card-number card-circle subtle">{curElem.id}</sapn>
          <h4><span id='c2' className="card-author subtle">{curElem.category}</span></h4>
          <h2  id="c3" className="card-title">{curElem.name}</h2> 
         
          <span className="card-description subtle">
        Skincare and makeup play a pivotal role in our day-to-day lives, as they are a basic necessity.......
          </span>
          <h3 > {curElem.description} </h3>
          <br></br>
          <div className='card-read'>Read </div>
        </div>
        <img src={curElem.images} className='card-media'></img>
        <span className='card-tag subtle' >Order Now</span>
        <h3 className='price'>Price : Rs. {curElem.price}/-</h3>
      </div>
    
    </div>
    );
})}
</section>

    </>
  );
}

export default Menucard