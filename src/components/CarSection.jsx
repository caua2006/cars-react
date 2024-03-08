// import LogoSedans from '../assets/icon-sedans.svg'
// import LogoSuvs from '../assets/icon-suvs.svg'
// import LogoLuxury from '../assets/icon-luxury.svg'


export function CarSection({ typeCar }) {
  let colorClassName = "";
  let textColor = "";
  if (typeCar.color == "O"){
    colorClassName = 'bg-orange-500 rounded-s-md'
    textColor = 'text-orange-500'
  }
  if (typeCar.color == "B"){
    colorClassName = 'bg-teal-600'
    textColor = 'text-teal-600'
  }
  if (typeCar.color == "G"){
    colorClassName = 'bg-cyan-800 rounded-e-md'
    textColor = "text-cyan-800"
  }


  console.log(colorClassName);
  return (
    <section className={`p-12 max-w-xs flex flex-col justify-between gap-5 ${colorClassName}`}>
      <img className='w-16 h-10 ' src={typeCar.img}   alt="" />
      <h2 className='text-2xl text-white'>{typeCar.name}</h2>
      <p className='text-slate-200'>{typeCar.description}</p>
      <button className={`bg-white rounded-full p-2 ${textColor} hover:bg-transparent hover:text-white hover:border`}>Learn more</button>
    </section>
  )
}

