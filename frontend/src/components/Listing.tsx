import { useEffect, useState } from "react";
import { getPosts } from "../middleware/postApi";

function Listing() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function retrieve() {
      getPosts().then((response) => setPosts(response));
    }

    retrieve();
  });

  type Post = {
    _id: string;
    title: string;
    furnitureType: string;
    description: string;
    price: number;
    userPosted: string;
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {posts.map((block: Post) => {
          return (
            <>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{block.title}</h5>
                    <p className="card-text">{block.description}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Posted by {block.userPosted}
                    </small>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Listing;
