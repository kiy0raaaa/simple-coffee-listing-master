import Card from './Card'
import './CoffeeList.css'

function CoffeeList({ coffees, loading, error }) {
  if (loading) return <p className="status-msg">Loading...</p>
  if (error) return <p className="status-msg error">Failed to load data. Please try again.</p>

  return (
    <div className="catalog">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
  )
}

export default CoffeeList
