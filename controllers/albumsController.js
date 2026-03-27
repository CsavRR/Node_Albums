const albums = [
    { id: 1, band: "Nirvana", title: "Incesticide", year: 1992},
    { id: 2, band: "Pearl Jam", title: "Ten", year: 1991},
    { id: 3, band: "Megadeth", title: "Countdown to Extinction", year: 1992},
    { id: 4, band: "Sodom", title: "Agent ORange", year: 1989},
    { id: 5, band: "Bathory", title: "Bathory", year: 1984}
]

export const getAllAlbums = (req, res) =>{
    res.status(200).json(albums);
}

export const getAlbumById = (req, res) =>{
    const id = +req.params.id;
    const album = albums.find(x => x.id === id);
    if (!album){
        res.status(404).json({message: "Album not found"});
    }
    res.status(200).json(album);
}

export const AddAlbum = (req, res) =>{
    const {band, title, year} = req.body;
    const id = (albums[albums.length -1]?.id || 0) + 1;
    if (!band || !title || !year){
        res.status(400).json({message: "Band, title and year are required"})
    }
    const album = {id, band, title, year};
    albums.post(album);
    res.status(201).json(album);
}

export const DeleteAlbum = (req, res) =>{
    const id = +req.params.id;
    const album = albums.find(x => x.id === id);
    if (!album){
        res.status(404).json({message: "Album not found"});
    }
    const index = albums.indexOf(album);
    albums.splice(index, 1);
    res.status(200).json({message: "Delete successful"});
}

export const ReplaceAlbum = (req, res) =>{
    const id = +req.params.id;
    const album = albums.find(x => x.id === id);
    if (!album){
        res.status(404).json({message: "Album not found"});
    }
    const {band, title, year} = req.body;
    if (!band || !title || !year){
        res.status(400).json({message: "Band, title and year are required"})
    }
    album.band = band;
    album.title = title;
    album.year = year;
    res.status(200).json(album);
}