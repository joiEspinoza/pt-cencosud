

const LatesPost = () => 
{
    return (
        
        <div className="row sideBR__rowLastPost mt-4">
            
            <div className="col-md-12">

                <p className="base__minTitle">Latest Post Activity</p>

                <div className="sideBR__latestContainer base__radius base__boxShadow">

                    <div className="row p-4" style={{ height : "80%" }}>

                        <div className="col-md-6 base__centerElements">

                            <img className="base__radius base__pointer" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1633299730/testCencosud%20/latestPost_xujfj5.jpg" alt="latest" />

                        </div>
                        
                        <div className="col-md-6">

                            <p className="base__minTitle mt-2" style={{ marginLeft : "25px" }}>Minimalist Stairs</p>
                            
                            <span className="base__flexRow color__textSecondary" style={{ marginLeft : "25px" }}>
                                
                                <p className="base__minTitle mt-1 sideBR__latestFont" style={{ color:"red", fontSize : "0.6rem" }}><i className="fas fa-heart center__heart"></i>&nbsp;27</p>
                                <p className="base__minTitle mt-1 sideBR__latestFont" style={{ marginLeft : "5px", fontSize : "0.6rem" }}><i className="fas fa-comment-dots"></i>&nbsp;12</p>
                                <p className="base__minTitle mt-1 sideBR__latestFont" style={{ marginLeft : "5px", fontSize : "0.6rem" }}><i className="fas fa-bookmark"></i>&nbsp;8</p>

                            </span>
                        
                        </div>

                    </div>
                    
                    <div className="row" style={{ height : "20%" }}>

                        <div className="col-md-12 base__centerElements">

                            <p className="base__minTitle color__textPrimary base__pointer">See All Post</p>

                        </div>

                    </div>
                
                </div>

            </div>
           

        </div>
    )
}

export default LatesPost
