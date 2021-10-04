import Feeds from "./Feeds"
import Users from "./Users"


const Center = () => 
{
    const following = 
    [
        { 
            name : "You", 
            perfilUrl : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1633218340/testCencosud%20/you_f0fdyb.png",
            lastestPost : [] 
        },
        { 
            name : "Supardi", 
            lastName : "unknown",
            perfilUrl : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1633217671/testCencosud%20/supardi_pb9akf.png",
            lastestPost : []
        },
        { 
            name : "Dean", 
            lastName : "Winchester",
            perfilUrl : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1633217671/testCencosud%20/Dean_vxtt6x.png",
            lastestPost : [ { img : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1633280233/testCencosud%20/post1Img_ucnf6g.jpg", likes : 632, comments : 64, liked : true } ] 
        },
        { 
            name : "Theodore", 
            lastName : "Bagwell", 
            perfilUrl : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1633217671/testCencosud%20/theodore_d8klz4.png", 
            lastestPost : [ { img : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1633287170/testCencosud%20/theoimgpost_kvufp9.jpg", likes : 22, comments : 18, liked : false } ] 
        },
        { 
            name : "Walter", 
            lastName : "White", 
            perfilUrl : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1633217671/testCencosud%20/Walter_bnwrzk.png",
            lastestPost : [ { img : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1633287170/testCencosud%20/walterimgpost_cohoid.jpg", likes : 48, comments : 16, liked : true } ]  
        },
        { 
            name : "Jesse", 
            lastName : "Pinkman", 
            perfilUrl : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1633217671/testCencosud%20/Jesse_aehxpg.png",
            lastestPost : [ { img : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1633287170/testCencosud%20/postImgJesse_sdrcu3.jpg", likes : 48, comments : 16, liked : false } ]  
        },
        { 
            name : "Enola", 
            lastName : "unknown",
            perfilUrl : "https://res.cloudinary.com/djlmqpd2n/image/upload/v1633217671/testCencosud%20/enola_g7ci0d.png",
            lastestPost : [] 
        },
    ];

    return (
        
        <div className="col-md-7 center__base p-4">
            
            <Users following={ following }/>

            <Feeds following={ following }/>
            
        </div>
    )
}

export default Center
