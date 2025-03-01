
export default function Treasure ({ treasure }) {


    return (
        <>

            <div>
                <h2>Treasure List</h2>
                    <div className="treasure-list">
                        {/* Check if monsters data is available */}
                        {treasure.length === 0 ? (
                            <p>Loading treasure...</p>  // Display this if no data is available yet
                        ) : (
                            <ul className="treasure-list">
                            {treasure.map(treasure => (
                                <li key={treasure.id} className="treasure-item">
                                <img src={treasure.image} alt={treasure.name} className="treasure-image"/>
                                <p className="treasure-name">{treasure.name}</p>
                                </li> // Assuming the monster has an `id` and `name`
                            ))}
                            </ul>
                        )}
                    </div>
            </div>

        </>
    )
}