import Card from './Card'
import './CoffeeList.css'

function CoffeeList({ coffees }) {
  return (
    <div className="catalog">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
  )

  return (
    <div className="catalog">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
  )
}

export default CoffeeList
