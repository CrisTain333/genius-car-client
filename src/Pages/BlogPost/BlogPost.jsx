import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const BlogPost = () => {
    const navigate =  useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form  =  e.target;
    const title = form.title.value;
    const photoUrl = form.photoUrl.value;
    const description = form.description.value;
    const post = {
        title,
        photoUrl,
        description
    }

    fetch('http://localhost:5000/blog/post',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data=> {
        if(data.acknowledged){
            toast.success('Blog Posted Successfully ')
            navigate('/blog')
        }
    });



  };
  return (
    <div>
      <div className="max-w-xl mx-auto mb-6">
        <div className="flex items-center ">
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="block w-full text-xl uppercase font-bold mb-4 text-center">
              Post Blog
            </span>
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="mb-4 md:w-full">
                <label htmlFor="email" className="block text-xs mb-1">
                  Blog Title
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="title"
                  placeholder="Your Title"
                  required
                />
              </div>
              <div className="mb-6 md:w-full">
                <label htmlFor="password" className="block text-xs mb-1">
                  Photo Url
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="photoUrl"
                  placeholder="Photo Url"
                  required
                />
              </div>
              <div className="mb-6 md:w-full">
                <label htmlFor="confirmPassword" className="block text-xs mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <input
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full"
                value="Post"
              />
            </form>
          </div>
        </div>
      </div>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  );
};

export default BlogPost;
