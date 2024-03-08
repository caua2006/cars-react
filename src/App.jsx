import { CarSection } from "./components/CarSection";
import LogoSedans from './assets/icon-sedans.svg'
import LogoSuvs from './assets/icon-suvs.svg'
import LogoLuxury from './assets/icon-luxury.svg'

export  function App() {

  const cars = [{
    id: 1,
    img: LogoSedans,
    name: "Sedans",
    description:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    color: "O"
  },
  {
    id: 2,
    img: LogoSuvs,
    name: "Suvs",
    description:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    color: "B"
  },
  {
    id: 3,
    img: LogoLuxury,
    name: "Luxury",
    description:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    color: "G"
    
  }
  ]
  return (
    <div className="flex justify-center items-center h-[100vh]">
      {cars.map(car => <CarSection key={car.id} typeCar={car}/>)}
    </div>
  )
}
