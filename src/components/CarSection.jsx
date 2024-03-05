import LogoSedans from '../assets/icon-sedans.svg'
import LogoSuvs from '../assets/icon-suvs.svg'
import LogoLuxury from '../assets/icon-luxury.svg'


export function CarSection(props) {
  console.log(props.typeCar);

  
  return (
    <section className='bg-orange-500 p-12 max-w-xs flex flex-col justify-between gap-5 rounded-s-md'>
      <img className='w-16 h-10'  alt="" />
      <h2 className='text-2xl text-white'>{props.typeCar.name}</h2>
      <p className='text-slate-200'>{props.typeCar.description}</p>
      <button className='bg-white rounded-full p-2 text-orange-500'>Learn more</button>
  </section>
  )
}

