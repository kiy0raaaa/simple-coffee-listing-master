import { useState, useEffect } from 'react'
import CoffeeList from './components/CoffeeList'
import './App.css'

const API_URL =
  'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json'

function App() {
  const [coffees, setCoffees] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => {
        setCoffees(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const displayed =
    filter === 'available' ? coffees.filter((c) => c.available) : coffees

  return (
    <>
      <nav>
        <img className="bg" src="../public/bg-cafe.jpg" alt="Coffee shop background"/>
      </nav>

      <section className="content">
        <div className="header">
          <h1>Our Collection</h1>
          <p>
            Introducing our Coffee Collection, a selection of unique coffees from
            different roast types and origins, expertly roasted in small batches
            and shipped fresh weekly.
          </p>
          <div className="buttons">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All Products
            </button>
            <button
              className={filter === 'available' ? 'active' : ''}
              onClick={() => setFilter('available')}
            >
              Available Now
            </button>
          </div>
        </div>

        <CoffeeList coffees={displayed} loading={loading} error={error} />

        <div className="author-info">
          Coded by <a href="#">Kiara Aisha Putri</a> | Challenge by{' '}
          <a
            href="https://www.devchallenges.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            devChallenges.io
          </a>
        </div>
      </section>
    </>
  )
}

export default App
