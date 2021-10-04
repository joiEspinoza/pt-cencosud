import { useState } from "react"


const Account = () => 
{

    const [hidden, setHidde] = useState(true)
    
    
    return (
       
        <div className="row sideBl__accountRow mt-3">
            
            <p className="base__minTitle base__pointer" onClick={ () => setHidde(!hidden) }>Account&nbsp;&nbsp;&nbsp;&nbsp;<i className={ hidden ? "fas fa-chevron-down" : "fas fa-chevron-up" }></i></p>
            
            {
                !hidden &&

                <div className="card base__borderNone base__pointer animate__animated animate__fadeIn">
                
                    <div className="row no-gutters">
                   
                        <div className="col-sm-3 base__centerElements">
                            
                            <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1633218146/testCencosud%20/perfilImg_k6bx3h.png" width="150%" alt="user"/>
                        
                        </div>
                    
                        <div className="col-sm-9">
                        
                            <div className="card-body">
                                
                                <p className="card-title base__minTitle" style={{ margin : 0 }}>Michael</p>
                                <small className="card-text">@michaelsco..</small>
                            
                            </div>
                        
                        </div>
                
                    </div>
            
                </div>
        
            }
           
        </div>
    )
}

export default Account
