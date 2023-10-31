import { useState } from "react"
import SingleCat from "./SingleCat"
import AddCatForm from "./AddCatForm"

const cats = [
    { id: "1", name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'},
    { id: "2", name: 'Cougar', latinName: 'Puma concolor', image: 'https://media.king5.com/assets/KING/images/ba124df4-6d69-4252-957f-1c07c1dc4420/ba124df4-6d69-4252-957f-1c07c1dc4420_1140x641.jpg' },
    { id: "3", name: 'Jaguar', latinName: 'Panthera onca', image: 'https://www.worldanimalprotection.org/sites/default/files/styles/600x400/public/media/Hero.jpg?h=022f0566&itok=xpNZ2BdY' },
    { id: "4", name: 'Leopard', latinName: 'Panthera pardus', image: 'https://www.treehugger.com/thmb/glS7N05QF96T56QwiNHa1fY65d0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-160869327-57f871694a4a4d69b2503f311cf31fbc.jpg' },
    { id: "5", name: 'Lion', latinName: 'Panthera leo', image: 'https://a-z-animals.com/media/2022/09/iStock-492611032.jpg' },
    { id: "6", name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://www.atlanticcouncil.org/wp-content/uploads/2022/12/snow-leopard-2023-scaled.jpg' },
    { id: "7", name: 'Tiger', latinName: 'Panthera tigris', image: 'https://animalsafari.com/wp-content/uploads/2022/01/bengal-tiger-1.jpeg' },
   ]


function BigCats() {

const [currentCats, setCurrentCats] = useState(cats)

const handleDeleteCat = (catId) => {
    // Filter out the cat with the specified name
    const updatedCats = currentCats.filter((cat) => cat.id !== catId);
    setCurrentCats(updatedCats);
  };


  const handleReverseCats = () => {
    let reversedCats = [...currentCats];
    reversedCats.reverse();
    setCurrentCats(reversedCats);
} // Cloning the current array and reversing it.

const handleSortedCatsAlphabetic = () => {
    let alphabeticCats = [...currentCats];
    alphabeticCats.sort((catA, catB) => {
        return catA.name.localeCompare(catB.name);
    });
    setCurrentCats(alphabeticCats);
} // Sorting alphabetically by comparing the string values of the names of the Cats through a callback function.

const handleDisplayPanthera = () => {
    let pantheraCats = currentCats.filter((cat) => cat.latinName.match('Panthera'))
    setCurrentCats(pantheraCats);
} // Filtering with the .match method on the latinName string to see if it includes 'Panthera'.

const handleDisplayAllCats = () => {
    setCurrentCats(cats);
} // Simply reverting back to the original array.

const handleAddCat = (newCat) => {
    newCat.id = currentCats.length + 1;
    console.log(newCat);
    setCurrentCats([...currentCats, newCat])
    console.log(setCurrentCats);
}


   const catItems = currentCats.map(cat => (
    <li key={cat.id}>Name: {cat.name}, Latin-name: {cat.latinName}</li>
    ))

    // Distributing the data from the cats-array as props via the SingleCat display component.
    const singleCatItems = currentCats.map(cat => (
        <SingleCat
            key={cat.id}
            id={cat.id}
            image={cat.image}
            name={cat.name}
            latinName={cat.latinName}
            onDelete={handleDeleteCat} />
    ))
        
       return(
        <>
            {/* {catItems} */}
            <span><button onClick={handleReverseCats}>Reverse Order</button><button onClick={handleSortedCatsAlphabetic}>Sort Alphabetically</button></span>
            <div><button onClick={handleDisplayPanthera}>Show Panthera Only</button><button onClick={handleDisplayAllCats}>Show Full List</button></div>
            <AddCatForm onAddCat={handleAddCat}></AddCatForm>
            {singleCatItems}
        </>
       )
}

export default BigCats