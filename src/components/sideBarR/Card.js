import React from 'react'


const Card = ({ suggestions }) => 
{

    return (
        
        <>

            {
                suggestions.map( ( s,i ) => 

                    <div key={i} className="col-md-12">
                                    
                        <div className="card base__borderNone">

                            <div className="row no-gutters">
                        
                                <div className="col-sm-2 base__centerElements">
                                    
                                    <img src={s.avatrImg} style={{ borderRadius : "50%", width : "180%" }} alt={s.url}/>
                                
                                </div>
                            
                                <div className="col-sm-6">
                                
                                    <div className="card-body">


                                        <p className="card-title base__minTitle" style={{ margin : 0, fontSize : "0.8rem" }}>{s.name}</p>
                                        <small className="card-text">{s.url}</small>
                                    
                                    </div>
                                
                                </div>

                                <div className="col-sm-4 base__centerElements">

                                    { 
                                        s.followed ?
                                        
                                        <button className="sideBR__btnFollow sideBR__btnFollowed base__minTitle">Followed</button>
                                        :
                                        <button className="sideBR__btnFollow base__minTitle">Follow</button>

                                    }

                    
                                </div>
                        
                            </div>

                        </div>

                    </div>
                
                
                )
            }
           
        </>
       
    )
}

export default Card
