import React,{useState, useEffect} from "react"
import { Container } from "react-bootstrap"
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemList from "./components/ItemList";
import { items } from "./data";

function App() {
  const [itemsData, setItemData] = useState(items)
  const allCat = ['الكل',...new Set(items.map(i => i.category))]  
  const filterbyCategory = cat =>{
    if(cat == "الكل") {
      setItemData(items)
    }else{
      const newArr = items.filter(item => item.category == cat)
      setItemData(newArr)
    }
  }
  function filterbySearch(value){
    let filterData = []
    items.forEach((item)=>{
        value = value.toLowerCase()
        let title = item.title.toLowerCase()
        let category = item.category.toLowerCase()
        let description = item.description.toLowerCase()
        let price = item.price.toLowerCase()
        if(title.includes(value) || category.includes(value) || description.includes(value) || price.includes(value)){
            filterData.push(item)
        }
    })
    setItemData(filterData)
  }

  return (
    <div className="color-body">
      <NavBar filterbySearch={filterbySearch}/>
      <Container>
        <Header />
        <Category filterbyCategory={filterbyCategory} allCat={allCat}/>
        <ItemList itemsData={itemsData}/>
      </Container>
    </div>
  )
}

export default App
