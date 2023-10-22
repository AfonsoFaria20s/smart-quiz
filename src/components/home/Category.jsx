import "../../styles/pages/Home/Category.scss"

function Category(props) {

    const opts = {
        id: props.categId,
        name: props.categName,
        img: props.image,
        event: props.event
    }

    return (
        <div className="category" key={opts.id}>
            <div className="img" style={{ backgroundImage: `url(${opts.img})` }}>

            </div>
            <div className="info">
                <span>{opts.name}</span>
                <button onClick={opts.event}>start</button>
            </div>
        </div>
    )
}
export default Category