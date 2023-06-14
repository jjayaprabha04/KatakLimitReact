import React from "react";
class HeaderComp extends React.Component{
    render()
    {
        return(
        
            <div className="headergrid">
            <div className="logo">
              <img src="IMG/Logo1.jpeg" alt="logo" width="150px" />
            </div>
            <div className="nav">
              <div id="circle">About</div>
              <div >Services <br /> &#8964;</div>
              <div>Folio</div>
              <div>Blog</div>
              <div>Contact</div>
            </div>
          </div>
            
        );
    }
}

export default HeaderComp;