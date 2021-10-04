import React from 'react'


const CardSugg = ({ suggestions }) => 
{

    return (
        
        <>

            {
                suggestions.map( ( s,i ) => 

                    <div key={i} className="col-md-12">
                                    
                        <div className="card base__borderNone">

                            <div className="row no-gutters">
                        
                                <div className="col-sm-3">
                                    
                                    <img src={ s.avatrImg } className="sideBR__SC_Img" alt={ s.url }/>
                                
                                </div>
                            
                                <div className="col-sm-5">
                                
                                    <div className="card-body card-body-noPadding">

                                        <p className="base__minTitle sideBR__SC_Title">{s.name}</p>
                                        <p className="base__minSubTitle">{s.url}</p>
                                    
                                    </div>
                                
                                </div>

                                <div className="col-sm-4 base__centerElements">

                                    { 
                                        s.followed ?
                                        
                                        <button className="sideBR__SC_btnFollow sideBR__btnFollowed base__minTitle">Followed</button>
                                        :
                                        <button className="sideBR__SC_btnFollow base__minTitle">Follow</button>

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

export default CardSugg
