import Card from "./Card"

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

                <div className="row base__flexRow base__minTitle base__centerElements">

                    <div className="col-md-6">

                        <p>Suggestion for you</p>

                    </div>

                    <div className="col-md-6">

                        <p className="color__textPrimary base__pointer" style={{ marginLeft : "50%" }}>See All</p>

                    </div>

                </div>

                <div className="row">

                  <Card suggestions={ suggestions } />
                
                </div>

            </div>

            <center><hr style={{ width : "90%" }}/></center>
        
        </div>
    )
}

export default Suggestion
