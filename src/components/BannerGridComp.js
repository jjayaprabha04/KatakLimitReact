import React from "react";
class BannerGridComp extends React.Component{
    render()
    {
        return(
            <div className="bannergrid" >
            <div className="bannerimg">
              <img src="IMG/kataklimt_banner.jpg" alt="Banner" />
            </div>
            <div className="welcomegrid" >
              <div className="welcome">
                Welcome&excl;
              </div>
              <div id="wlcmtxt" className="colgrey">
                <span> Click here</span> &nbsp;for Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem rem ullam odit? Tenetur exercitationem
                nam aut possimus obcaecati tempore laudantium voluptas! Non quisquam quae quaerat asperiores fugit reprehenderit consectetur labore.
              </div>
            </div>
          </div>

        );
    }
}
export default BannerGridComp;