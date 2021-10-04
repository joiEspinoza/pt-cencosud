import { useState } from "react"


const Account = () => 
{

    const [hidden, setHidde] = useState(true);
    
    
    return (
       
        <div className="row sideBl__accountRow mt-3">
            <div className="col-md-12">
                
                <p className="base__minTitle base__pointer" style={{ marginLeft : "37px" }} onClick={ () => setHidde(!hidden) }>Account<i style={{ marginLeft : "80px" }} className={ hidden ? "fas fa-chevron-down" : "fas fa-chevron-up" }></i></p>
            
                {
                    !hidden ?

                    <div className="card base__borderNone base__pointer animate__animated animate__fadeIn">
                    
                        <div className="row no-gutters">
                    
                            <div className="col-sm-4">
                                
                                <img className="sideBl__Cardimg" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1633218146/testCencosud%20/perfilImg_k6bx3h.png" alt="user"/>
                            
                            </div>
                        
                            <div className="col-sm-8">
                            
                                <div className="card-body card-body-noPadding">
                                    
                                    <p className="base__minTitle sideBl__CardTitle">Michael</p>
                                    <p className="base__minSubTitle">@michaelsco..</p>
                                
                                </div>
                            
                            </div>
                    
                        </div>
                
                    </div>
                    :
                    <div className="card base__borderNone"></div>
                }

            </div>
            
        </div>
    )
}

export default Account
