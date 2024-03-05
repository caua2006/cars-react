import LogoSedans from '../assets/icon-sedans.svg'
export function CarSection() {
  return (
    <section className='bg-orange-500 p-12 max-w-xs flex flex-col justify-between gap-5 rounded-s-md'>
      <img className='w-16 h-10' src={LogoSedans} alt="" />
      <h2 className='text-2xl text-white'>Sedans</h2>
      <p className='text-slate-200'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
      or on your next road trip.</p>
      <button className='bg-white rounded-full p-2 text-orange-500'>Learn more</button>
  </section>
  )
}

