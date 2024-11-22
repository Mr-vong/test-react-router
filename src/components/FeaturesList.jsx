export default function FeaturesList({ fullList = false }){
  return(
    <>
      <Feature
        featureContent={{
          title: "Real-time insights for faster decisions",
          subtitle: "Data at your fingertips",
          illustrateUrl: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac8d_torch-product-image-2.avif",
          featureBoxes: [
            {
              icon: {
                url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac67_zap.svg",
                alt: "Zap icon",
              },
              title: "Instant updates",
              content: "Always stay up-to-date with live data flowing directly into your dashboard. Track changes as they happen.",
            },{
              icon: {
                url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac6a_sliders-horizontal.svg",
                alt: "Sliders icon",
              },
              title: "Customisable views",
              content: "Tailor your dashboard to show the metrics that matter most. Create multiple views for different team members or purposesTailor your dashboard to show the metrics that matter most. Create multiple views for different team members or purposes.",
            },{
              icon: {
                url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac66_handshake.svg",
                alt: "Handshake icon",
              },
              title: "Collaborative tools",
              content: "Tailor your dashboard to show the metrics that matter most. Create multiple views for different team members or purposes.",
            }
          ]
        }}
      />
      <Feature
        featureContent={{
          title: "Turn complex data into simple decisions",
          subtitle: "Actionable insights",
          illustrateUrl: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac8f_torch-product-image-3.avif",
          featureBoxes: [
            {
              icon: {
                url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac61_wand-sparkles.svg",
                alt: "Magic icon",
              },
              title: "Automated reports",
              content: "Save time with automated, scheduled reports. Get the insights you need, delivered straight to your inbox.",
            },
            {
              icon: {
                url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac69_chart-no-axes-combined.svg",
                alt: "Chart icon",
              },
              title: "Trend analysis",
              content: "Discover patterns and trends in your data effortlessly. Visualise historical data to forecast future performance.",
            },
            {
              icon: {
                url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac64_chart-pie.svg",
                alt: "Pie icon",
              },
              title: "Pie icon",
              content: "Dive deeper into your data with interactive charts. Hover and click for more detailed insights and breakdowns.",
            }
          ]
        }}
      />
      {
        fullList &&
        <Feature
          featureContent={{
            title: "Connect to your fave tools in minutes",
            subtitle: "Seamless integration",
            illustrateUrl: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac92_torch-product-image-4.avif",
            featureBoxes: [
              {
                icon: {
                  url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac63_timer.svg",
                  alt: "Timer icon",
                },
                title: "Quick setup",
                content: "Get started fast with easy integrations. Connect your existing tools and platforms with just a few clicks.",
              },{
                icon: {
                  url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac65_refresh-cw.svg",
                  alt: "Refresh icon",
                },
                title: "Data synchronisation",
                content: "Keep everything in sync. Torch ensures that data flows seamlessly between all your connected apps, so nothing is ever out of date.",
              },{
                icon: {
                  url: "https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac68_panels-top-left.svg",
                  alt: "Panel icon",
                },
                title: "No-code integrations",
                content: "No need for technical expertise. Set up integrations without writing a single line of code, making it accessible to everyone on your team."
              }
            ]
          }}
        />
      }
    </>
  )
}

function Feature({ featureContent }){
  const {
    title,
    subtitle,
    illustrateUrl,
    featureBoxes,
  } = featureContent;

  return(
    <section className="section">
      <div className="flex flex-col gap-y-[12.5rem]">
        <div className="flex flex-col gap-y-16">
          <div>
            <p className="text-accent mb-4">{subtitle}</p>
            <h2 className="text-[3.5rem] text-100 max-w-[34rem] leading-[1.1]">{title}</h2>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img className="w-full" src={illustrateUrl} alt="Product image" />
          </div>
          <div className="grid grid-cols-3 gap-x-16">
            {featureBoxes.map((fb) => (
              <FeatureBox
                fb={fb}
                key={fb.title}
              />
            ))}
          </div>
        </div>
      </div>  
    </section>
  )
}

export function FeatureBox({ fb }){
  return(
    <div>
      <img src={fb.icon.url} alt={fb.icon.alt} />
      <div className="h-6"></div>
      <h3 className="text-2xl	text-white">{fb.title}</h3>
      <div className="h-2"></div>
      <p className="text-white opacity-75 font-200">{fb.content}</p>
    </div>
  )
}