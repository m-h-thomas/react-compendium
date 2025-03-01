
export default function Creatures ({ creature }) {


    return (
        <>

            <div>
                <h2>Creatures List</h2>
                {/* Check if monsters data is available */}
                {creature.length === 0 ? (
                    <p>Loading creatures...</p>  // Display this if no data is available yet
                ) : (
                    <ul className="creature-list">
                    {creature.map(creature => (
                        <li key={creature.id}>{creature.name}
                        <img src={creature.image} alt={creature.name}/>
                        </li> // Assuming the monster has an `id` and `name`
                    ))}
                    </ul>
                )}
            </div>

        </>
    )
}