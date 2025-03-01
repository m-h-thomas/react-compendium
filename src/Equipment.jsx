
export default function Equipment ({ equipment }) {


    return (
        <>

            <div>
                <h2>Equipment List</h2>
                    <div className="equipment-list">
                        {/* Check if monsters data is available */}
                        {equipment.length === 0 ? (
                            <p>Loading equipment...</p>  // Display this if no data is available yet
                        ) : (
                            <ul className="equipment-list">
                            {equipment.map(equipment => (
                                <li key={equipment.id} className="equipment-item">
                                    <img src={equipment.image} alt={equipment.name} className="equipment-image" />
                                    <p className="equipment-name">{equipment.name}</p>
                                </li>
                            ))}
                            </ul>
                        )}
                </div>
            </div>

        </>
    )
}