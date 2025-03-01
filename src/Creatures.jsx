
export default function Creatures ({ creature }) {


    return (
        <>

            <div>
                <h2>Creatures List</h2>
                    <div className="creature-list">
                        {/* Check if monsters data is available */}
                        {creature.length === 0 ? (
                            <p>Loading creatures...</p>  // Display this if no data is available yet
                        ) : (
                            <ul className="creature-list">
                            {creature.map(creature => (
                                <li key={creature.id} className="creature-item">
                                <img src={creature.image} alt={creature.name} className="creature-image"/>
                                <p className="creature-name">{creature.name}</p>
                                </li> // Assuming the monster has an `id` and `name`
                            ))}
                            </ul>
                        )}
                    </div>
            </div>

        </>
    )
}