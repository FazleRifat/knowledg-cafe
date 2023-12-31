import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks,setBookmarks]=useState([])
  const[readingTime , setReadingTime] = useState((0))
  const handleAddBookmark = blog =>{
    const newBookMarks = [...bookmarks,blog]
    setBookmarks(newBookMarks)
  }
  const handleMarkAsRead = (time,id) =>{
    setReadingTime(readingTime + time)
    console.log('remove',id);
    const removeBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(removeBookmarks)
  }
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-5xl mx-auto gap-3">
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
        <Bookmarks bookmarks ={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
