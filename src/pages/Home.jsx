import NavBar from "../components/global/NavBar"
import "../styles/pages/Home/Home.scss"
import { useState } from "react"
import Category from "../components/home/Category"
import data from "../data/categories/categData.json"
import { useNavigate } from "react-router-dom"


function Home() {

    const navigate = useNavigate()
    // eslint-disable-next-line
    let [categories, setCategories] = useState(data)
    let [text, setText] = useState()

    let [filteredCategs, setFilteredCategs] = useState(categories)

    const handleClick = (key, name, img) => {

        navigate("/quiz", {
            state: {
                id: key,
                categName: name,
                image: img,
                style: { backgroundImage: `url(${img})` }
            }
        })
    }

    const searchText = (e) => {
        setText(e.target.value)
        setFilteredCategs(categories.filter(categ => categ.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    const search = () => {
        setFilteredCategs(categories.filter(categ => categ.name.toLowerCase().includes(text.toLowerCase())))
    }

    return (
        <>
            <NavBar />
            <div className="search-bar">
                <input type="text" placeholder="search for a category..." onChange={searchText} />
                <div className="search" onClick={search}>
                    <span className="material-symbols-outlined">search</span>
                </div>
            </div>
            <div className="categories-container">{
                filteredCategs.map(categ => {
                    return <Category categName={categ.name} event={() => { handleClick(categ.id, categ.name, categ.image_url) }} image={categ.image_url} key={categ.id} />
                })
            }</div>
        </>
    )
}
export default Home