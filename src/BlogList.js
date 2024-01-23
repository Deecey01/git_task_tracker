import { Link } from "react-router-dom";
const BlogList = ({ blogs, title}) => {

return ( 
    <div className="blog-list">
    <h2>{ title }</h2>
    {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
        <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
        </Link>
        </div>
    ))}
    </div>
);
}

export default BlogList;



// import React, { useState } from 'react';
// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { Link } from 'react-router-dom';

// const DraggableBlog = ({ blog, index, moveBlog }) => {
//   const [, ref] = useDrag({
//     type: 'BLOG',
//     item: { index },
//   });

//   const [, drop] = useDrop({
//     accept: 'BLOG',
//     hover: (draggedItem) => {
//       if (draggedItem.index !== index) {
//         moveBlog(draggedItem.index, index);
//         draggedItem.index = index;
//       }
//     },
//   });

//   return (
//     <div className="blog-preview" ref={(node) => ref(drop(node))}>
//       <Link to={`/blogs/${blog.id}`}>
//         <h2>{blog.title}</h2>
//         {/* <p>Written by { blog.author }</p> */}
//       </Link>
//     </div>
//   );
// };

// const BlogList = ({ blogs, title }) => {
//   const [blogOrder, setBlogOrder] = useState(blogs.map((_, index) => index));

//   const moveBlog = (fromIndex, toIndex) => {
//     const newOrder = [...blogOrder];
//     newOrder.splice(fromIndex, 1);
//     newOrder.splice(toIndex, 0, fromIndex);
//     setBlogOrder(newOrder);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="blog-list">
//         <h2>{title}</h2>
//         {blogOrder.map((index) => (
//           <DraggableBlog key={blogs[index].id} blog={blogs[index]} index={index} moveBlog={moveBlog} />
//         ))}
//       </div>
//     </DndProvider>
//   );
// };

// export default BlogList;
