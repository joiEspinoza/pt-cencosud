
const Users = ({ following }) => 
{
    
    
    return (
        
        <div className="row center__followingRow base__centerElements">
            
            {
                following.map( ( f,i ) => 
                
                    <div className="center__users base__flexColumn base__centerElements" key={i}>
                        
                        <img className="base__pointer" src={ f.perfilUrl } alt={f.name} />
                        <p className="base__minTitle mt-2">{f.name}</p>
                    
                    </div>
                
                )
            }

            <hr className="mt-2"/>
        
        </div>
    )
}

export default Users
