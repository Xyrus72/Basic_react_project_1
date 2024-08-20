import './App.css'
import Header from './assets/component/Header'
import Blogs from './assets/component/Blogs/Blogs'
import Bookmarks from './assets/component/Bookmarks/Bookmarks'
import { useState } from 'react'


function App() {

  const [bookmarks,setBookmarks] =useState([]);
  const [readingTime,setReadingTime]=useState(0)

  const handleAddtoBookmark =blog => {
    const newBookmarks= [...bookmarks,blog];
    setBookmarks(newBookmarks);


  }
  const handleMarkasRead =time =>{

    setReadingTime(readingTime+time);



  }

  return (
    <>
      



      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddtoBookmark={handleAddtoBookmark} handleMarkasRead={handleMarkasRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
