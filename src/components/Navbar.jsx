import { Link } from "react-router-dom";

function Navbar(){
  return(
    <div className="bg-black sticky top-0 left-0 z-[9999]">
      <div className="container max-w-full flex justify-between items-center px-20 h-[4.5rem]">
        <div className="flex gap-x-12	items-center">
          <Link to="/" className="link w-[86.08px] mb-1">
            <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac6c_torch-logo.svg" alt="Touch logo" />
          </Link>
          <nav className="flex justify-center items-center text-[0.96rem] text-400 capitalize">
            <Link to="/features" className="nav-link">features</Link>
            <Link to="/pricing" className="nav-link">pricing</Link>
            <Link to="/about" className="nav-link">about</Link>
            <Link to="/contact" className="nav-link">contact</Link>
          </nav>
        </div>
        <div className="flex gap-x-3 text-white text-[0.96rem]">
          <Link to="/sign-in" className="button-secondary small hover">sign in</Link>
          <a href="#" className="button small hover">get started</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;