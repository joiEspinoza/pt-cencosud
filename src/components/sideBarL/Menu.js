

const Menu = () => 
{
    
    const urls = 
    [   
        { text : "Home", icon : "fas fa-home" } ,
        { text : "Messages", icon : "fas fa-comment-dots" } ,
        { text : "Profile", icon : "fas fa-user" },
        { text : "Saved Post", icon : "fas fa-bookmark" }, 
        { text : "Settings", icon : "fas fa-cog" } 
    
    ];


    return (
        
        <div className="row sideBL__menuRow mt-3">
            
            <p className="base__minTitle">Menu</p>

            <ul className="sideBL__ul mt-3">
                
                { urls.map( ( url, i ) => 
                    
                    <li key={i} className="base__pointer">
                    
                        <p className="base__minTitle">
                            
                            <i className={url.icon} style={{ marginRight : "10px" }}></i>
                            {url.text}
                        
                        </p>
                    
                    </li> 
                )}
            
            </ul>
        
        </div>
    )
}

export default Menu
