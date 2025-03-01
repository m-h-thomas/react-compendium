
export default function Treasure ({ treasure }) {


    return (
        <>

            <div>
                <h2>Treasure List</h2>
                {/* Check if monsters data is available */}
                {treasure.length === 0 ? (
                    <p>Loading treasure...</p>  // Display this if no data is available yet
                ) : (
                    <ul className="treasure-list">
                    {treasure.map(treasure => (
                        <li key={treasure.id}>{treasure.name}
                        <img src={treasure.image} alt={treasure.name}/>
                        </li> // Assuming the monster has an `id` and `name`
                    ))}
                    </ul>
                )}
            </div>

        </>
    )
}