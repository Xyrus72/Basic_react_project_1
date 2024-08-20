import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types'

const Blogs = ({handleAddtoBookmark, handleMarkasRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect ( ()=>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data=> setBlogs(data))





    },[])




    return (
        <div className="md:w-2/3"  >
            <h1 className="text-4xl">Blogs :{blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddtoBookmark={handleAddtoBookmark}
                    handleMarkasRead={handleMarkasRead}
                    
                    ></Blog>)
                    
            }
        </div>
    );
};


Blogs.propTypes ={
    handleAddtoBookmark : propTypes.fu,
    handleMarkasRead: propTypes.fu
}

export default Blogs;