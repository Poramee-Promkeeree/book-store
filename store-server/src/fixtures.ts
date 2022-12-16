import db from "./db"

async function loadFixtures(clearData = false){
  if(clearData){
    console.warn('clearing data')
    await db('book').del()
    await db('category').del()
  }

  await db.batchInsert('category', [
    { id: 1, title: 'Fantasy' },
    { id: 2, title: 'Computer' },
    { id: 3, title: 'Doujin' }
  ])
  
  await db.batchInsert('book', [
    { id: 1, title: 'Harry Potter', price: 560, stockAmount: 10, categoryId: 1 },
    { id: 2, title: 'Game of Thrones', price: 520, stockAmount: 6, categoryId: 1 },
    { id: 3, title: 'Node.js', price: 300, stockAmount: 4, categoryId: 2 },
    { id: 4, title: 'Onichichi', price: 149, stockAmount: 9, categoryId: 3 },
  ])
}

export default loadFixtures