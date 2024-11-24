import TakeAction from '../components/TakeAction';
import FeaturesList from '../components/FeaturesList';
import KindWord from '../components/KindWord';
import FAQ from '../components/FAQ';
import GetStarted from '../components/GetStarted';

export default function Index(){
  return(
    <>
      <section className='section'>
        <div className='grid grid-cols-2 gap-x-20'>
          <div className='flex flex-col gap-y-8'>
            <h1 className='text-7xl text-100 pb-2'>Powerful data insights for all</h1>
            <p className='text-xl text-100 font-300 opacity-75'>Torch makes data analysis easy for everyone. Visualise key metrics, track performance, and discover trends without needing a data science background.</p>
            <div className='flex gap-x-2.5'>
              <a href="#" className='button'>get started</a>
              <a href="#" className='button-secondary'>learn more</a>
            </div>
            <div className='flex items-center gap-x-10 mt-8'>
              <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac75_logo-1.svg" alt="Logo" className='max-w-24	max-h-5 opacity-50' />
              <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac77_logo-2.svg" alt="Logo" className='max-w-24	max-h-5 opacity-50' />
              <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac76_logo-4.svg" alt="Logo" className='max-w-24	max-h-5 opacity-50' />
              <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac74_logo-3.svg" alt="Logo" className='max-w-24	max-h-5 opacity-50' />
            </div>
          </div>
          <div>
            <img src="https://cdn.prod.website-files.com/67066dfc1c57408478acabb1/67066dfc1c57408478acac91_torch-product-image-1.avif" alt="Hero image" />
          </div>
        </div>
      </section>
      <TakeAction />
      <FeaturesList />
      <KindWord />
      <FAQ />
      <GetStarted />
    </>
  )
}