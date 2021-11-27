import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Blog 1", body: "lorem ipsum...", author:"Hasan", id :1},
        {title: "Blog 2", body: "lorem ipsum...", author:"Hakan", id :2},
        {title: "Blog 3", body: "lorem ipsum...", author:"Hasan", id :3}
    ]);


    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        
    }, []);

    return (
        <div className="home">
            <BlogList blogs={blogs} title ="All Blogs!"  handleDelete={handleDelete}/>
        </div>
    );
}

export default Home
