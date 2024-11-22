export default function KindWord(){
  return(
    <section className="section">
      <h2 className="text-[3.5rem] text-100 mb-16">Kind words from customers</h2>
      <div className="grid grid-cols-3 gap-x-5">
        <div className="flex flex-col justify-between bg-800 rounded-[1.25rem] p-10">
          <img className="max-w-24 max-h-5" src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac75_logo-1.svg" alt="logo" />
          <div className="h-8"></div>
          <p className="text-xl	text-white">Torch completely transformed how we track our business performance. The real-time insights have helped us make faster, smarter decisions!</p>
          <div className="h-8"></div>
          <div className="flex gap-x-4 items-center text-400">
            <div className="w-20 h-20 overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac42_pexels-olena-bohovyk-3646160.avif" alt="testimonial-image" />
            </div>
            <div>
              <div className="font-500">Emily Chang</div>
              <div className="text-sm	opacity-60 font-200">Luminate</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-800 rounded-[1.25rem] p-10">
          <img className="max-w-24 max-h-5 ml-[-1.3rem]" src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac74_logo-3.svg" alt="logo" />
          <div className="h-8"></div>
          <p className="text-xl	text-white">Our team loves how easy Torch is to use. The custom dashboards give us exactly the data we need, all in one place.</p>
          <div className="h-8"></div>
          <div className="flex gap-x-4 items-center text-400">
            <div className="w-20 h-20 overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac4b_pexels-monstera-5384445.avif" alt="testimonial-image" />
            </div>
            <div>
              <div className="font-500">Xavier Carter</div>
              <div className="text-sm	opacity-60 font-200">Cucumber</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-800 rounded-[1.25rem] p-10">
          <img className="max-w-24 max-h-5" src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac76_logo-4.svg" alt="logo" />
          <div className="h-8"></div>
          <p className="text-xl	text-white">Torch seamlessly integrated with our existing tools, making data management so much more efficient. It’s become an essential part of our workflow.</p>
          <div className="h-8"></div>
          <div className="flex gap-x-4 items-center text-400">
            <div className="w-20 h-20 overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac4c_pexels-amir-esrafili-6274712.avif" alt="testimonial-image" />
            </div>
            <div>
              <div className="font-500">Alexander Patel</div>
              <div className="text-sm	opacity-60 font-200">Vexa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}