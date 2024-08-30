import profileDoraemon from '../img/doraemon.jpg'
function Card() {
    return (
        <div className="card">
            <img src={profileDoraemon} alt="profile picture" />
            <h2>Doraemon</h2>
            <p>The robot in the future which has many treasure.</p>
        </div>
    );
}

export default Card