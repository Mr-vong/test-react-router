export default function TakeAction(){
  return(
    <section className="section">
      <h2 className="text-[3.5rem] mb-20 text-100">Take action from insights</h2>
      <div className="grid grid-rows-[repeat(7, minmax(0, auto))] grid-cols-2 auto-cols-fr grid-col gap-5">
        <div className="col-span-1 row-span-2 bg-800 w-full h-full rounded-xl p-10">
          <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac62_layout-dashboard.svg" alt="Dashboard icon" />
          <div className="mt-32"></div>
          <h3 className="text-100 text-[2rem] mb-4">Easy-to-use dashboards</h3>
          <p className="text-100 opacity-75 font-200">Create intuitive, custom dashboards to visualise your most important metrics. No coding or technical skills required.</p>
        </div>
        <div className="bg-800 w-full h-full rounded-xl p-10">
          <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac5f_radar.svg" alt="Dashboard icon" />
          <div className="mt-8"></div>
          <h3 className="text-100 text-[2rem] mb-4">Real-time data updates</h3>
          <p className="text-100 opacity-75 font-200">Get the latest insights with real-time data refreshes. Stay on top of changes as they happen, keeping your team informed.</p>
        </div>
        <div className="col-span-1 row-span-2 bg-800 w-full h-full rounded-xl p-10">
          <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac61_wand-sparkles.svg" alt="Dashboard icon" />
          <div className="mt-32"></div>
          <h3 className="text-100 text-[2rem] mb-4">Easy-to-use dashboards</h3>
          <p className="text-100 opacity-75 font-200">Set up automated reports to be delivered directly to your inbox. Save time and focus on making decisions, not creating reports.</p>
        </div>
        <div className="bg-800 w-full h-full rounded-xl p-10">
          <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac5f_radar.svg" alt="Dashboard icon" />
          <div className="mt-8"></div>
          <h3 className="text-100 text-[2rem] mb-4">Real-time data updates</h3>
          <p className="text-100 opacity-75 font-200">Get the latest insights with real-time data refreshes. Stay on top of changes as they happen, keeping your team informed.</p>
        </div>
      </div>
    </section>
  )
}