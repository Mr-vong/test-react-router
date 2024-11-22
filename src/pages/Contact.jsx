import TakeAction from "../components/TakeAction";
import FAQ from "../components/FAQ";
import GetStarted from "../components/GetStarted";

export default function Contact(){
  return(
    <>
      <section className="section">
        <div className="grid grid-cols-2 gap-x-[4.5rem]">
          <div>
            <h1 className='text-7xl text-100 pb-2'>Get in touch with the Torch team</h1>
            <div className="h-8"></div>
            <p className="text-xl text-100 font-300 opacity-75">Have questions or just want to say hi? Send us a message here or you can email us on hi@email.com.</p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
      <TakeAction />
      <FAQ />
      <GetStarted />
    </>
  )
}

function ContactForm(){
  return(
    <form className="flex flex-col gap-y-4">
      <input className="bg-700 text-100 rounded-lg min-h-14 py-4 px-5" type="text" id="Name" name="Name" data-name="Name" placeholder="Name" maxLength={256} required />
      <input className="bg-700 text-100 rounded-lg min-h-14 py-4 px-5" type="email" id="Email" name="Email" data-name="Email" placeholder="Email adress" maxLength={256} required />
      <textarea className="bg-700 text-100 rounded-lg min-h-[10.5rem] py-4 px-5" name="Message" id="Message" maxLength={5000} data-name="Message" placeholder="Your massage" required></textarea>
      <div className="h-1"></div>
      <input className="button full-width font-400" type="submit" data-wait="Please wait..." value="Send message" />
    </form>
  )
}