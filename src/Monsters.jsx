
export default function Monsters ({ monster }) {


    return (
        <>

            <div>
                <h2>Monsters List</h2>
                <div className="monster-list">
                    {/* Check if monsters data is available */}
                    {monster.length === 0 ? (
                        <p>Loading monsters...</p>  // Display this if no data is available yet
                    ) : (
                        <ul className="monster-list">
                        {monster.map(monster => (
                            <li key={monster.id} className="monster-item">
                            <img src={monster.image} alt={monster.name} className="monster-image"/>
                            <p className="monster-name">{monster.name}</p>
                            </li> // Assuming the monster has an `id` and `name`
                        ))}
                        </ul>
                    )}
                </div>
            </div>

        </>
    )
}