import FAQ from "../components/FAQ";
import GetStarted from "../components/GetStarted";

export default function Pricing(){
  return(
    <>
      <section className="section">
        <h1 className='text-7xl text-100 font-500 pb-2'>Simple and flexible pricing</h1>
        <div className="h-16"></div>
        <div className="grid grid-cols-3 gap-5 auto-rows-auto	auto-cols-fr">
          <PricingCard
            cardInfo={{
              price: "$12/mo",
              planType: "Starter",
              planFeatures: {
                prevFeature: "",
                features: [
                  "Real-time data dashboards",
                  "Customisable reports",
                  "Email support",
                  "Single-user access",
                ],
              },
              planButton: "button-secondary",
              bg: false
            }}
          />
          <PricingCard
            cardInfo={{
              price: "$59/mo",
              planType: "Advanced",
              planFeatures: {
                prevFeature: "basic",
                features: [
                  "Advanced analytics tools",
                  "Multi-user access",
                  "Automated reporting",
                  "Integrations with popular tools",
                  "Priority email support",
                ],
              },
              planButton: "button",
              bg: true,
            }}
          />
          <PricingCard
            cardInfo={{
              price: "Contact",
              planType: "Enterprise",
              planFeatures: {
                prevFeature: "advanced",
                features: [
                  "Unlimited user accounts",
                  "Dedicated account manager",
                  "Custom data solutions",
                  "Advanced security features",
                  "API access",
                ],
              },
              planButton: "button-secondary",
              bg: false,
            }}
          />
        </div>
      </section>
      <FAQ />
      <GetStarted />
    </>
  )
}

function PricingCard({ cardInfo }){
  const {
    price,
    planType,
    planFeatures,
    planButton,
    bg,
  } = cardInfo;

  return(
    <div className={`${bg && "relative"} bg-800 p-10 w-full h-full flex flex-col justify-between items-stretch rounded-xl overflow-hidden`}>
      <div className="text-white z-10">
        <div className="text-xl">{planType}</div>
        <div className="h-4"></div>
        <div className="text-[3.5rem] font-500">{price}</div>
        <div className="h-8"></div>
        <div className="w-full h-[.0625rem] bg-[#ffffff0f]"></div>
        <div className="h-8"></div>
        <div className="flex flex-col gap-5 mb-10">
          {planFeatures.prevFeature && `All ${planFeatures.prevFeature} plan features plus:`}
          {
            planFeatures.features.map((feature, index) => (
              <div key={index} className="flex gap-x-3">
                <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac71_check.svg" alt="Check icon" />
                <div className="font-200">{feature}</div>
              </div>
            ))
          }
        </div>
      </div>
      <a href="/" className={`${planButton} hover full-wdith z-10`}>Choose {planType}</a>
      {bg && <div className="gradient-image"></div>}
    </div>
  )
}