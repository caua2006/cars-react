import { CarSection } from "./components/CarSection";

export  function App() {

  const cars = [{
    id: 1,
    name: "Sedans",
    description:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    color: "Orange"
  },
  {
    id: 2,
    name: "Suvs",
    description:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    color: "Blue"
  },
  {
    id: 3,
    name: "Luxury",
    description:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  }
  ]
  return (
    <div className="flex justify-center items-center h-[100vh]">
      {cars.map(car => <CarSection key={car.id} typeCar={car}/>)}
    </div>
  )
}
