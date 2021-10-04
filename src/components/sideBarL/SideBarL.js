import React from 'react'
import Account from './Account'
import Banner from './Banner'
import Logo from './Logo'
import Menu from './Menu'

const SideBarL = () => 
{
    return (
        
        <div className="col-md-2 sideBL__base base__centerElements">
            
            <div className="sideBl__elementsContainer">

                <Logo/>
                
                <Menu/>
                
                <Account/>

                <Banner/>

            </div>

        </div>
    )
}

export default SideBarL
