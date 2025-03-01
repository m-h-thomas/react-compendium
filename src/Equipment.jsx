
export default function Equipment ({ equipment }) {


    return (
        <>

            <div>
                <h2>Equipment List</h2>
                {/* Check if monsters data is available */}
                {equipment.length === 0 ? (
                    <p>Loading equipment...</p>  // Display this if no data is available yet
                ) : (
                    <ul className="equipment-list">
                    {equipment.map(equipment => (
                        <li key={equipment.id}>{equipment.name}
                        <img src={equipment.image} alt={equipment.name}/>
                        </li> // Assuming the monster has an `id` and `name`
                    ))}
                    </ul>
                )}
            </div>

        </>
    )
}