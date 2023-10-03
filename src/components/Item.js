function Item(props) {
    const {data, delstudent}=props
    return (
        <>
            <li key={data.id}>
                <p>{data.id} - {data.name}</p>
                <button onClick={() => delstudent(data.id)} className="delete">Delete</button>
            </li>
        </>
    )
}
export default Item