
const AboutMenu = () => 
{

    const AboutMenu = ["About","Help","Terms","Popular","Language"]
    
    return (
        
        <ul className="base__flexRow sideBR__aboutMenu">
            
            {
                AboutMenu.map( ( a,i ) => 
                
                    <li key={i} className="base__pointer">{a}</li>
                
                )
            }
       
        </ul>
    )
}

export default AboutMenu
