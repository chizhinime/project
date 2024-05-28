import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 36)));
  }, []);

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Blog</h1>
        <p>Read our latest articles and updates</p>
      </header>
      <section className="blog-content">
        {posts.map(post => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <a href={`#`} className="blog-link">Read More</a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
