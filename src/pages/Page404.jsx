import { Link } from "react-router-dom"
import { scrollToTop } from "../utils/scrollToTop"

export default function Page404(){
  return(
    <div className="section">
      <div className="max-w-[37.5rem] mx-auto text-white">
        <h1 className="text-7xl font-500">404</h1>
        <h2 className="text-[3.5rem] font-500">Page can’t be found</h2>
        <div className="h-8"></div>
        <Link
          to="/"
          className="button font-400 hover"
          onClick={scrollToTop}
        >
          Go home
        </Link>
      </div>
    </div>
  )
}