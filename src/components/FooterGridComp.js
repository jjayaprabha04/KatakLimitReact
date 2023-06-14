import React from "react";
class FooterGridComp extends React.Component
{
    render()
    {
        return(
            <div className="footer" style={{"padding":"5px 50px", "color":"black"}}>
            {/* This is inline comment //Inline styles must be converted to objects means jsx literals */}
            <div>&copy; CopyRight2023</div>
            <div style={{"text-align":"right","padding-right":"50px"}}>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>

        );
    }
}
export default FooterGridComp;