'use server'

async function fetchPosts() {
    const res = await fetch('https://dummyjson.com/posts');
    const data = await res.json();
    return data;
}
export default async function page () {
    const PostData = await fetchPosts();

    return (
        <>
            <h1>Server Action In Server Component</h1>
            <div>
                {
                    PostData.posts.map(post=>(
                        <div key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}