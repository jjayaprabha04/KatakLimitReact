import React from "react";
class FolioGridComp extends React.Component
{
    render(){
        return(
            <div className="Foliogrid">
                <div className="foliocolI">
                    <div className="coltxt">
                        Fashion
                    </div>
                    <div >
                        <img src="IMG/Fashion.jpg" alt="Fashion" />
                    </div>
                    <div className="colprgh" id="colgrey">
                        <span>Lorem, ipsum dolor.</span> <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Facilis minima quis at illum reprehenderit a nulla.
                    </div>
                    <div >
                        <button>Read More</button>
                    </div>
                </div>
                <div className="foliocolII">
                    <div className="coltxt">
                        Nature
                    </div>
                    <div >
                        <img src="IMG/nature.jpg" alt="Nature" />
                    </div>
                    <div className="colprgh" id="colgrey">
                        <span>Lorem, ipsum dolor.</span> <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Facilis minima quis at illum reprehenderit a nulla.
                    </div>
                    <div >
                        <button>Read More</button>
                    </div>
                </div>
                <div className="foliocolIII">
                    <div className="coltxt" >
                        Love Story
                    </div>
                    <div >
                        <img src="IMG/lovestory.jpg" alt="Love Story" />
                    </div>
                    <div className="colprgh" id="colgrey">
                        <span>Lorem, ipsum dolor.</span> <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Facilis minima quis at illum reprehenderit a nulla.
                    </div>
                    <div >
                        <button>Read More</button>
                    </div>
                </div>
                <div className="foliocolIV">
                    <div className="coltxt">
                        Fine Art
                    </div>
                    <div >
                        <img src="IMG/man.jpg" alt="FineArt" />
                    </div>
                    <div className="colprgh" id="colgrey">
                        <span>Lorem, ipsum dolor.</span> <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Facilis minima quis at illum reprehenderit a nulla.
                    </div>
                    <div >
                        <button>Read More</button>
                    </div>
                </div>
          </div>

        );

    }        
}

export default FolioGridComp;