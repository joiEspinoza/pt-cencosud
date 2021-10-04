import React from 'react'
import Center from './center/Center'
import SideBarL from './sideBarL/SideBarL'
import SideBarR from './sideBarR/SideBarR'


const Layout = () => 
{

    return (
        
        <div className="row layout__shape base__radius">
            
            <SideBarL/>

            <Center/>

            <SideBarR/>

        </div>
    )
}


export default Layout
