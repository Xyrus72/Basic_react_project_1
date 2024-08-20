import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog,handleAddtoBookmark,handleMarkasRead}) => {
    

    const {title,cover,author,author_img,posted_date,reading_time,hashtags}=blog;

    return (
        <div className='mb-20 space-y-4 mt-4'>
            <img className='w-full mb-8' src={cover} alt={`cover pictrue of the title. ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <img className='w-14 '  src={'../../../src/pic/profile.png'} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                     
                </div>

                <div>
                    <span>{reading_time} min read </span>
                    <button onClick={ ()=> handleAddtoBookmark(blog)} className='ml-2 twxt-red-300 text-2xl'><FaBookmark></FaBookmark></button>

                </div>


            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p >{    
                // eslint-disable-next-line react/prop-types
                hashtags.map((hash,idx) => <span  key={idx} ><a href="">{hash}</a></span>)
                    }</p>
                    <button className='text-purple-700 font-bold underline' onClick={()=> handleMarkasRead(reading_time)}>Mark as Read</button>
        </div>
    );
};


Blog.PropTypes={
    blog:PropTypes.object.isRequired,
    handleAddtoBookmark : PropTypes.func,
    handleMarkasRead : PropTypes.func
}

export default Blog;