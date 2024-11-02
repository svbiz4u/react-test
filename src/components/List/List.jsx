const List  = ({data, title}) => {
   return (
    <div>
        <h2>{title}</h2>
         <ul>
            {data.map(item =>
            ( <li key={item.id}>{item.title} <button>delete</button></li>))}
        </ul>

    </div>
   )
}

export default List