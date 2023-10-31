import { useState } from "react";

function AddCatForm({onAddCat}) {

    const [name, setName] = useState('')
    const [latinName, setLatinName] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCat({name, latinName, image})
    }

    return (
        <div className="AddCatForm formComponentBox">
            <form onSubmit={handleSubmit}>
            <label>Cat Name:
                <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>Cat Latin Name:
                <input name="latinName" value={latinName} onChange={(e) => setLatinName(e.target.value)} />
            </label>
            <label>Cat Image URL:
                <input name="imageURL" value={image} onChange={(e) => setImage(e.target.value)} />
            </label>
            <button>Add Cat</button>
            </form>
        </div>
    )
}

export default AddCatForm