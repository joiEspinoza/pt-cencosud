import Post from "./Post";


const Feeds = ({ following }) => 
{

    const feedMenu = [ "All","Fallowing", "Newest", "Popular" ];

    return (
        
        <div className="row mt-4">
            <div className="col-md-12">

                <div className="row">

                    <div className="col-md-6">

                        <p className="base__minTitle">Feeds</p>

                    </div>

                    <div className="col-md-6 center__feedColumn">

                        <ul className="base__flexRow center__feedMenu">
                        {
                            feedMenu.map( ( fm, i ) => 
                            
                                <li key={i} className="base__minTitle base__pointer">{fm}</li>  
                            
                            )
                        }
                        </ul>

                    </div>
                
                </div>

                <div className="row">

                    <Post following={ following }/>

                </div>
            
            </div>
        </div>
    )
}

export default Feeds
