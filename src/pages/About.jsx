import { FeatureBox } from "../components/FeaturesList";
import KindWord from "../components/KindWord";
import FAQ from "../components/FAQ";
import GetStarted from "../components/GetStarted";

export default function About(){
  const featureBoxes = [
    {
      icon: {
        url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac78_rocket.svg",
        alt: "Rocket icon",
      },
      title: "Innovation first",
      content: "We constantly push the boundaries of what’s possible. At Torch, we embrace new ideas and cutting-edge technologies to deliver powerful, forward-thinking solutions.",
    },
    {
      icon: {
        url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac79_shield-half.svg",
        alt: "Shield icon",
      },
      title: "Security by design",
      content: "Data protection is at the heart of everything we do. Our platform is built with top-tier security measures to ensure your information is always safe and secure.",
    },
    {
      icon: {
        url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac7c_chart-spline.svg",
        alt: "Chart icon",
      },
      title: "Data-driven decisions",
      content: "We believe in the power of data to guide smart business choices. Torch empowers teams to make informed decisions with real-time insights and comprehensive analytics.",
    },
    {
      icon: {
        url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac7b_sprout.svg",
        alt: "Sprout icon",
      },
      title: "Continuous growth",
      content: "At Torch, we foster a culture of learning and growth. Whether it’s improving our product or developing our team, we’re always striving to be better.",
    },
    {
      icon: {
        url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac7d_cog.svg",
        alt: "Cog icon",
      },
      title: "Seamless integration",
      content: "We’re committed to making your workflow smooth and efficient. Torch integrates effortlessly with your existing tools, so you can focus on what matters most.",
    },
    {
      icon: {
        url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac7a_heart-handshake.svg",
        alt: "Heart handshake icon",
      },
      title: "Customer-centric focus",
      content: "Your success is our priority. We work hand-in-hand with our customers to ensure Torch meets their needs and helps their business thrive.",
    },
  ]
  return(
    <>
      <section className="section">
        <div className="grid grid-cols-2">
          <div>
            <h1 className='text-7xl text-100 pb-2'>We do things a bit differently here…</h1>
            <div className="h-8"></div>
            <p className="text-xl text-100 font-300 opacity-75">We believe innovation happens when you break away from the usual. We focus on creating smart, secure, and intuitive solutions that put our customers first. Real progress starts with thinking differently.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="flex flex-col gap-y-16">
          <div>
            <p className="text-accent mb-4">Our mission</p>
            <div className="h-4"></div>
            <h2 className="text-[3.5rem] text-100 max-w-[34rem] leading-[1.1]">Empower businesses with real-time data</h2>
          </div>
          <div className="rounded-xl overflow-hidden bg-accent">
            <img className="mix-blend-luminosity" src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac82_Silhouetted%20Professionals%20Working%20in%20Pink%20Light%20(1).avif" alt="About image" />
          </div>
        </div>
      </section>
      <section className="section">
        <div>
          <h2 className="text-[3.5rem] text-100 max-w-[34rem] leading-[1.1]">Led by strong values</h2>
          <div className="h-20"></div>
          <div className="grid grid-cols-3 grid-rows-[auto] auto-cols-fr grid-flow-row gap-y-16 gap-x-20">
            {featureBoxes.map(fb => (
              <FeatureBox
                fb={fb}
                key={fb.title}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="grid grid-cols-3 grid-rows-[auto] auto-cols-fr gap-4">
          <div className="rounded-xl overflow-hidden row-span-2 col-span-2">
            <img className=" object-cover aspect-square" src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac81_Serene%20Office%20Setting%20with%20Two%20Men%20Working.avif" alt="About image" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img className=" object-cover aspect-square" src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac80_Creative%20Workspace%20with%20Two%20Colleagues.avif" alt="About images" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img className=" object-cover aspect-square" src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac7e_Casual%20Office%20Interaction.avif" alt="About images" />
          </div>
        </div>
      </section>
      <KindWord />
      <FAQ />
      <GetStarted />
    </>
  )
}