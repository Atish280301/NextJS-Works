'use client'
import { useEffect, useState } from "react";
async function fetchPosts() {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    return data.posts;
}
export default function page () {
    const [posts, setposts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetchPosts().then(data => {
            setposts(data);
            setLoading(false);
        })
    },[])

    if(loading) {
        return <div>Page Is Loading...</div>
    }

    return (
        <>
            <h1>Server Action In Client Component</h1>
            <div>
                {
                    posts.map((post) => (
                        <div key={post.id}>  
                            <h2>{post.title}</h2>
                        </div>
                    ))
                }
            </div>
        </>
    );
}