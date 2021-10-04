
const AboutMenu = () => 
{

    const AboutMenu = ["About","Help","Terms","Popular","Language"]
    
    return (
        
        <div className="row">
            <div className="col-md-12">

                <ul className="base__flexRow sideBR__aboutMenu">
                
                    {
                        AboutMenu.map( ( a,i ) => 
                        
                            <li key={i} className="base__pointer">{a}</li>
                        
                        )
                    }
        
                </ul>

            </div>
        </div>
        
    )
}

export default AboutMenu
