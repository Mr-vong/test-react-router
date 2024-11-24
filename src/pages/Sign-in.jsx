export default function SignIn(){
  return(
    <section className="section flex items-center relative h-screen">
      <div className="gradient-image"></div>
      <div className="w-full">
        <div className="w-[36rem] bg-900 rounded-xl flex flex-col h-full min-h-100 relative z-50 p-10 mx-auto">
          <h1 className="text-100 text-[2rem]">Sign in</h1>
          <div className="h-10"></div>
          <div className="w-full mb-0 mx-auto">
            <form className="flex flex-col gap-y-4">
              <div className="max-w-[43.75rem]">
                <label htmlFor="Email-address" className="text-100 font-500 mb-2 block">Email address</label>
                <input type="email" id="Email-address" className="w-full bg-700 text-100 rounded-lg min-h-14 py-4 px-5" maxLength={255} name="Email-address" data-name="Email-address" placeholder="Your email" required />
              </div>
              <div className="max-w-[43.75rem]">
                <label htmlFor="Password" className="text-100 font-500 mb-2 block">Password</label>
                <input type="password" id="Password" className="w-full bg-700 text-100 rounded-lg min-h-14 py-4 px-5" maxLength={255} name="Password" data-name="Password" placeholder="Your Password" required />
                <div className="h-10"></div>
                <a href="#" className="text-accent text-sm">Forgot password</a>
              </div>
              <div className="h-10"></div>
              <input type="submit" className="button hover" value="Sign in" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}