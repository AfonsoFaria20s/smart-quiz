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
            <div className="footer">
                <div className="upper">
                    <div className="footer-card footer-navigation">
                        <span className="footer-title">navigation</span>
                        <span onClick={() => {
                            navigate("/home");
                        }}>home</span>
                        <span onClick={() => {
                            navigate("/dashboard");
                        }}>dashboard</span>
                        <span onClick={() => {
                            navigate("/settings");
                        }}>settings</span>
                    </div>
                    <div className="footer-card footer-contact">
                        <span className="footer-title">about</span>
                        <span>our mission</span>
                        <span>additional information</span>
                    </div>
                </div>
                <hr />
                <div className="lower">
                    <select className="form-select language">
                        <option>Português</option>
                    </select>
                    <span>© 2023 All rights reserved, SmartQuiz</span>
                </div>
            </div>
        </>
    )
}
export default Home