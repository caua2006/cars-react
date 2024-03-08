// import LogoSedans from '../assets/icon-sedans.svg'
// import LogoSuvs from '../assets/icon-suvs.svg'
// import LogoLuxury from '../assets/icon-luxury.svg'


export function CarSection({ typeCar }) {
  let colorClassName = ""
  if (typeCar.color == "O"){
    colorClassName = 'bg-orange-500 p-12 max-w-xs flex flex-col justify-between gap-5 rounded-s-md'
  }
  if (typeCar.color == "B"){
    colorClassName = 'bg-teal-700 p-12 max-w-xs flex flex-col justify-between gap-5 rounded-s-md'
  }
  if (typeCar.color == "G"){
    colorClassName = 'bg-cyan-700 p-12 max-w-xs flex flex-col justify-between gap-5 rounded-s-md'
  }


  console.log(colorClassName);
  return (
    <section className={colorClassName}>
      <img className='w-16 h-10' src={typeCar.img}   alt="" />
      <h2 className='text-2xl text-white'>{typeCar.name}</h2>
      <p className='text-slate-200'>{typeCar.description}</p>
      <button className='bg-white rounded-full p-2 text-orange-500 hover:bg-transparent hover:text-white hover:border'>Learn more</button>
    </section>
  )
}

