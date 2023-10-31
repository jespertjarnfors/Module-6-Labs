function SingleCat({ image, id, name, latinName, onDelete }) {

    const handleRemoveCat = () => {
      onDelete(id); // Passing the id of the cat to be deleted
    }

    return (
        <div className="catDisplayBox">
            <img src={image} alt={`Image of a ${name}`} className="catImage"></img>
            <div className="catTextDisplay"><h3>{name}</h3><h4>Latin-name: <em>{latinName}</em></h4><a href="#" onClick={handleRemoveCat}>delete</a></div>
        </div>
    )
}

export default SingleCat