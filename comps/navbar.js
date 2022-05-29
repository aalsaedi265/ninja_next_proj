// this will show on all other components
// make sure this is not in pages but
// in it s own

function Navbar(){

    return (

        <nav>
            <div className="logo">
                <h1>Nija List</h1>
            </div>
             <a>Home</a>
             <a>About</a>
             <a>Ninjas Listing</a>
        </nav>
    )
}

export default Navbar;