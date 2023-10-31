

function Greeting(props) {

    return (
        <div className="Greeting">
        {/* if the 'name' prop exists, render it on the screen */}
   
        {props.name ? <h1>Hello {props.name}!</h1> : <h1>Hello World!</h1>}

        {props.children}
        </div>
        )
}

export default Greeting