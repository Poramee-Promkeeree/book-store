import Repo from './repositories'
import Category from './models/Category'
import { useEffect, useState } from 'react'



function App() {
  const [categoryList, setCategoryList] = useState<Category[]>([])
  

  const fetchCategoryList = async () => {
    const result = await Repo.categories.getAll()
    if (result) {
      setCategoryList(result)
    }
  }

  useEffect(() => {
    fetchCategoryList()
  })


  return (
      <div>
        <hr /> 
          {categoryList.map(category => <p key={category.id}>  Title : {category.title}</p>)}  
        <hr />  
      </div>

  )
}

export default App;
