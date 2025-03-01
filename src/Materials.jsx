
export default function Materials ({ material }) {


    return (
        <>

            <div>
                <h2>Materials List</h2>
                {/* Check if monsters data is available */}
                {material.length === 0 ? (
                    <p>Loading materials...</p>
                ) : (
                    <ul className="material-list">
                    {material.map(material => (
                        <li key={material.id}>{material.name}
                        <img src={material.image} alt={material.name}/>
                        </li>
                    ))}
                    </ul>
                )}
            </div>

        </>
    )
}