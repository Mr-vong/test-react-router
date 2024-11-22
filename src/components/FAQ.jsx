import { useRef, useState } from "react"

export default function FAQ(){
  return(
    <section className="section">
      <div className="flex flex-col max-w-3xl mx-auto items-center gap-y-16">
        <div className="text-center text-white">
          <h2 className="text-[3.5rem] text-100">FAQs</h2>
          <div className="h-6"></div>
          <p className="text-xl opacity-75 font-200">Answers to questions you might have about Torch.</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <Accordion
            text={{
              title: "What does Touch do?",
              content: "Torch is a data analytics platform that helps businesses track, visualise, and optimise their performance metrics in real-time. It enables teams to make data-driven decisions through customisable dashboards and powerful insights."
            }}
          />
          <Accordion
            text={{
              title: "Who is Torch for?",
              content: "Torch is ideal for startups, tech companies, and growing businesses that want to harness the power of their data. It’s built for teams looking to improve their decision-making by tracking key performance indicators (KPIs) across all departments."
            }}
          />
          <Accordion
            text={{
              title: "How secure is my data on Torch?",
              content: "Security is our top priority. Torch uses end-to-end encryption, secure data centres, and regular security audits to ensure your data is protected at all times. We also offer role-based access control to manage permissions within your team."
            }}
          />
          <Accordion
            text={{
              title: "Can Torch integrate with existing tools?",
              content: "Yes, Torch integrates with a wide range of tools, including CRM systems, marketing platforms, and cloud storage services. Our API allows for seamless integration, helping you connect Torch to the software you already use."
            }}
          />
          <Accordion
            text={{
              title: "Is Torch easy to use if you’re not technical?",
              content: "Absolutely! Torch’s interface is user-friendly and intuitive, designed for both technical and non-technical users. You can create custom reports, dashboards, and visualisations without any coding knowledge."
            }}
          />
        </div>
      </div>
    </section>
  )
}

function Accordion({ text }){
  const [show, setShow] = useState(false);
  const contentRef = useRef(null);

  function handleClick(){
    console.log(contentRef.current)
    setShow(!show);
  }

  return(
    <div className="w-full bg-800 border-none border-[.0625rem] rounded-xl">
      <div onClick={handleClick} className=" flex justify-between items-center text-white cursor-pointer py-8 px-9">
        <h3 className="text-2xl">{text.title}</h3>
        <img
          className="w-8 h-8"
          src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac6d_plus.svg" alt="Plus icon" 
          style={{
            transition: ".25s",
            transform: show ? "rotate(45deg)" : "rotate(0deg)",
            transformStyle: "preserve-3d",
          }}
        />
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-200`}
        style={{
          maxHeight: show ? `${contentRef.current.scrollHeight}px` : '0',
        }}
      >
        <p className="text-white font-200 px-9 opacity-75">{text.content}</p>
        <div className="h-8"></div>
      </div>
    </div>
  )
}