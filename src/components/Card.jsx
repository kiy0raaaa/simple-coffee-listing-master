import './Card.css'

function StarFilled() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#F6C768"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function StarEmpty() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4D5562"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function Card({ coffee }) {
  const { name, image, price, rating, votes, popular, available } = coffee
  const hasRating = rating !== null && Number(votes) > 0

  return (
    <div className="item">
      <div className="coffee-img-wrap">
        <img className="coffee-img" src={image} alt={name} loading="lazy" />
        {popular && <span className="badge-popular">Popular</span>}
      </div>

      <div className="menu">
        <div className="menu-top">
          <h2>{name}</h2>
          <div className="price">{price}</div>
        </div>

        <div className="rating">
          {hasRating ? <StarFilled /> : <StarEmpty />}
          {hasRating ? (
            <>
              <span className="rating-score">{parseFloat(rating)}</span>
              <span className="votes">({votes} votes)</span>
            </>
          ) : (
            <span className="votes">No ratings</span>
          )}
          {!available && <span className="sold-out">Sold out</span>}
        </div>
      </div>
    </div>
  )
}

export default Card
