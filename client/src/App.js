import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import Pagination from './components/Pagination';

const App = () => {
  const params = useParams();
  const pageNumber = params.pageNumber || 1;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const response = await fetch(`http://localhost:5000/api/v1/posts?page=${page}`);
        const { data, pages: totalPages } = await response.json();
        setPages(totalPages);
        setPosts(data);
        setLoading(false);


      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(`Something bad happened.😇`)
      }
    }

    fetchPosts();
  }, [page])







  return (
    <div className="App">
      {/* Pagination component */}
      <Pagination />
      {/* Posts display */}
      <div className="Card__Post">
        {posts.map((post) => {
          return (
            <Card key={post._id} post={post} />
          )
        })}
      </div>
      <Pagination />
    </div>
  );
}

export default App;
