import CardSugg from "./CardSugg"


const Suggestion = () => 
{
    const suggestions = 
    [
        {
            name : "Sarah Tancredi",
            url : "@dr.sarah",
            avatrImg : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1633296900/testCencosud%20/avatarsara_fipbtu.jpg",
            followed : false
        },

        {
            name : "Arthur Shelby",
            url : "@art.shelby",
            avatrImg : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1633296900/testCencosud%20/avatar_arthur_rvsnw0.jpg",
            followed : true
        },

        {
            name : "Vin Diesel",
            url : "@vindiesel",
            avatrImg : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1633296900/testCencosud%20/avatarvin_jm2bb0.jpg",
            followed : false
        },
    ]

    return (
       
        <div className="row sideBR__rowSuggestion">
            
            <div className="col-md-12">

                
                <div className="base__flexRow" style={{ justifyContent : "space-between" }}>
                
                    <p className="base__minTitle">Suggestion for you</p>
                    <p className="base__minTitle color__textPrimary base__pointer">See All</p>

                </div>
               

                <div className="row">

                  <CardSugg suggestions={ suggestions } />
                
                </div>

            </div>

            <center><hr style={{ width : "90%" }}/></center>
        
        </div>
    )
}

export default Suggestion
