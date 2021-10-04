

const Post = ({ following }) => 
{

    
    following.sort(( a, b ) => 
    {
        if( a.name > b.name ) 
        { 
            return 1;
        } 
        else if( a.name < b.name ) 
        {
            return -1;
        };

        return 0;
    });
  


    return (
    
        <>
        
        {
            following.map( ( f,i ) => 
            
                f.lastestPost.length > 0 &&
                
                <div key={i} className="col-md-6 p-1 base__centerElements">
                        
                    <div className="center__postContainer">

                        <div className="center__imgPost base__radius base__boxShadow">

                            <img className="base__radius base__pointer" src={ f.lastestPost.map( (el) => el.img ) } alt={ f.name } />
                            
                        </div>

                        <div className="base__flexRow p-2">
                            
                            <span className="mt-3 base__flexRow" style={{ width : "65%" }}>
                               
                                <img className="center__postMiniAvatar" src={ f.perfilUrl } alt={ f.name } />
                                <p className="base__minTitle mt-1 center__postFont_res" style={{ marginLeft : "10px" }}>{`${f.name} ${f.lastName}`}</p>
                            
                            </span>
                            
                            <span className="mt-3 base__flexRow color__textSecondary" style={{ width : "35%" }}>
                                
                                <p className="base__minTitle mt-1 center__postFont_res" style={{ color : f.lastestPost.map( (el) => el.liked && "red" ) }}><i className="fas fa-heart base__pointer center__heart"></i>&nbsp;&nbsp;{ f.lastestPost.map( (el) => el.likes ) }</p>
                                <p className="base__minTitle mt-1 center__postFont_res" style={{ marginLeft : "10px" }}><i className="fas fa-comment-dots base__pointer"></i>&nbsp;&nbsp;{ f.lastestPost.map( (el) => el.comments ) }</p>
                            
                            </span>
                            
                        </div>

                    </div>

                </div>
        
            )
        }
     
        </>
    )
}

export default Post
