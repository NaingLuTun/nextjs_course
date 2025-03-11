const FetchAlbumAPI = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums")
    if (!response.ok) throw new Error("Failed to fetch error")

    const albums: {id:number, title: string}[] = await response.json()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
            {albums.map((album) => (
                <div key={album.id} className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-bold mb-2">{album.title}</h3>
                    <p className="text-gray-600">Album ID: {album.id}</p>
                </div>
            ))}
        </div>
    )
}

export default FetchAlbumAPI