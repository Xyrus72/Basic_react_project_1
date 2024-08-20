import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 ml-4 mt-2 pt-4">

            <div>
                <h3 className='text-4xl text-center' >Reading Time : {readingTime} min</h3>

            </div>


            <h2 className="text-3xl text-center ">Bookmarks : {bookmarks.length}</h2>
            {
                bookmarks.map( bookmark => <Bookmark key={bookmark.id}  bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.PropTypes ={
    bookmarks:PropTypes.array,
    readingTime : PropTypes.number
}




export default Bookmarks;