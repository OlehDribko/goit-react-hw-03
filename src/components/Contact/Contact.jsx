const Contact = ({contact}) =>{
return(
    <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        <button>Delete</button>
    </div>
)
}

export default Contact