import React from "react";
class BlogGridComp extends React.Component
{
    render()
    {
        return(
            <div className="bloggrid">
                <AboutGridComp />
                <PhotoGridComp />
          </div>
        );
    }
}

class AboutGridComp extends React.Component
{
    constructor()
    {
        super();
        this.li=["Item1","Item2", "Item3", "Item4"];        
    }
    render()
    {
        return(
            <div className="aboutgrid">
                    <div className="coltxt">
                        Shortly About Me
                    </div>
                    <div className="abtcolgrid">
                        <div> <img src="IMG/JeniLo.jpg" alt="" /></div>
                        <div className="description">
                            <div>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Facilis minima quis at illum reprehenderit a nulla.
                            </div>
                            <div className="colgrey">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Facilis minima quis at illum reprehenderit a nulla.
                            </div>
                            <div className="heartlist">
                                <div>
                                    <ul>
                                        {this.li.map((v,i)=><li key={i}>{v}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                    {this.li.map((v,i)=><li key={i}>{v}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

class PhotoGridComp extends React.Component{
    render()
    {
        return(
            <div className="Photoshootgrid">
                    <div className="coltxt">
                        Latest Photoshoots
                    </div>
                    <div className="grpphotogrid">
                        <div><img src="IMG/photoshoot1.jpg" alt="" /></div>
                        <div><img src="IMG/photoshoot2.jpg" alt="" /></div>
                        <div><img src="IMG/photoshoot3.jpg" alt="" /></div>
                        <div><img src="IMG/photoshoot4.jpg" alt="" /></div>

                        <div><img src="IMG/photoshoot1.jpg" alt="" /></div>
                        <div><img src="IMG/photoshoot2.jpg" alt="" /></div>
                        <div><img src="IMG/photoshoot3.jpg" alt="" /></div>
                        <div><img src="IMG/photoshoot4.jpg" alt="" /></div>

                        <div><img src="IMG/photoshoot1.jpg" alt="" /></div>
                        <div><img src="IMG/photoshoot2.jpg" alt="" /></div>
                        <div><img src="IMG/photoshoot3.jpg" alt="" /></div>
                        <div><img src="IMG/photoshoot4.jpg" alt="" /></div>
                    </div>
                </div>
        );
    }
}
export default BlogGridComp;