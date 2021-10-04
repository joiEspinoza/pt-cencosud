
const Search = () => 
{
    
    return (
        
        <div className="row sideBR__searchRow" >
            
            <div className="col-md-12 base__flexRow base__centerElements">
                
                <input className="sideBR__searchInput text-center base__minTitle" placeholder="Search"/>
                <button className="sideBr__btns" ><i className="fas fa-bell"></i></button>
                <button className="sideBr__btns sideBr__btns2 base__boxShadow"><i className="fas fa-cloud-upload-alt"></i></button>

            </div>
            
        </div>
    )
}

export default Search
