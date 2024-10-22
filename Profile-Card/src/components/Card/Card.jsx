import './Card.css'
function Card(props) {
  return (
    <div className={`card ${props.theme}`}>
        <div className='card-image'>
            <img src={props.profileImage} alt="" />
        </div>
        <div className='card-content'>
            <h3>Name: <span>{props.name}</span></h3>
            <h3>Age: <span>{props.age}</span></h3>
            <h3>Location: <span>{props.location}</span></h3>
        </div>
    </div>
  )
}

export default Card
