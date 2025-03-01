
export default function Materials ({ material }) {


    return (
        <>

            <div>
                <h2>Materials List</h2>
                    <div className="material-list">
                        {/* Check if monsters data is available */}
                        {material.length === 0 ? (
                            <p>Loading materials...</p>
                        ) : (
                            <ul className="material-list">
                            {material.map(material => (
                                <li key={material.id} className="material-item">
                                <img src={material.image} alt={material.name} className="material-image"/>
                                <p className="material-name">{material.name}</p>
                                </li>
                            ))}
                            </ul>
                        )}
                    </div>
            </div>

        </>
    )
}