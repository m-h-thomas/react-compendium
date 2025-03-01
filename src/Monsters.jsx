
export default function Monsters ({ monster }) {


    return (
        <>

            <div>
                <h2>Monsters List</h2>
                {/* Check if monsters data is available */}
                {monster.length === 0 ? (
                    <p>Loading monsters...</p>  // Display this if no data is available yet
                ) : (
                    <ul className="monster-list">
                    {monster.map(monster => (
                        <li key={monster.id}>{monster.name}
                        <img src={monster.image} alt={monster.name}/>
                        </li> // Assuming the monster has an `id` and `name`
                    ))}
                    </ul>
                )}
            </div>

        </>
    )
}