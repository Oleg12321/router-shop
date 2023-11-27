import { Fragment, useEffect, useState } from "react"
import { fetchPosts } from "../GetProduct"
import { Link } from "react-router-dom"

import './Posts.css'

export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const showPosts = async () => {
      const getPosts = await fetchPosts()
      setPosts(getPosts);
    }
    showPosts()
  }, [])
  
  return (
    <Fragment>
      <section className="pg-header">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-g-7">
              <h1>Posts</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ul className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Posts</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <ul className="post-list">
          {posts &&
            posts.map((item) => (
              <li className="post-list__item" key={item.id}>
                <h3 className="post-list__title">{item.title}</h3>
                <img className="post-list__image" src={item.url} alt="" />
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
}
