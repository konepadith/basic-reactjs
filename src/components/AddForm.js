import "./AddForm.css"

export default function AddForm(){
    return (
        <>
        <section className="container">
            <form>
                <label>Student name</label>
                <input type="text" name="name"/>
                <button type="submit" className="btn-add">save</button>
            </form>
        </section>
        </>
    )
}