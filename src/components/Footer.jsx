import { Link } from "react-router-dom";

export default function Footer(){
  return(
    <section className="section">
      <div className="grid grid-cols-5 grid-rows-[auto] gap-x-8 auto-cols-auto grid-flow-col items-start text-white">
        <div className="flex flex-col gap-y-4 text-sm">
          <div className="opacity-60">Product</div>
          <Link to="/" className="link">Home</Link>
          <Link to="/features" className="link">Feature</Link>
          <Link to="/pricing" className="link">Pricing</Link>
          <Link to="sign-in" className="link">Sign in</Link>
        </div>
        <div className="flex flex-col gap-y-4 text-sm">
          <div className="opacity-60">Company</div>
          <Link to="about" className="link">About</Link>
          <Link to="contect" className="link">Contact</Link>
        </div>
        <div className="flex flex-col gap-y-4 text-sm">
          <div className="opacity-60">Social</div>
          <Link to="https://x.com/" className="link" target="_blank">X(Twitter)</Link>
          <Link to="https://www.instagram.com/" className="link" target="_blank">Instagram</Link>
          <Link to="https://www.linkedin.com/" className="link" target="_blank">LinkedIn</Link>
        </div>
        <div className="flex flex-col gap-y-4 text-sm">
          <div className="opacity-60">Admin</div>
          <Link to="/" className="link">Style guide</Link>
          <Link to="/" className="link">Licenses</Link>
          <Link to="/" className="link">Password</Link>
          <Link to="/404" className="link">404</Link>
        </div>
        <div className="flex flex-col gap-y-4 text-sm">
          <div className="opacity-60">Important</div>
          <Link to="/" className="link">Site by Bryn Taylor</Link>
          <Link to="/" className="link">View all templates</Link>
          <Link to="/" className="link">Powered by Webflow</Link>
        </div>
      </div>
      <div className="h-24"></div>
      <div className="bg-[#ffffff0f] w-full h-[.0625rem]"></div>
      <div className="h-10"></div>
      <div className="flex justify-between items-center">
        <a href="/">
          <img className="link w-auto h-6" src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac6c_torch-logo.svg" alt="Logo" />
        </a>
        <div className="text-white text-sm opacity-60">© Torch 2024</div>
      </div>
    </section>
  )
}