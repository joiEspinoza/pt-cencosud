import React from 'react'
import AboutMenu from './AboutMenu'
import LatesPost from './LatesPost'
import Search from './Search'
import Suggestion from './Suggestion'

const SideBarR = () => 
{
    return (
        
        <div className="col-md-3 sideBR__base">
            
            <Search/>
            
            <Suggestion/>

            <LatesPost/>

            <AboutMenu/>

        </div>
    )
}

export default SideBarR
