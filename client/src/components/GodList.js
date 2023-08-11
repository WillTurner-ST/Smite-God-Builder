import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GodList = () => {
  const [allGods, setAllGods] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/god")
      .then((response) => {
        console.log(response.data);
        setAllGods(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
<div className="mx-2 w-full flex flex-row flex-wrap">
  {allGods.map((god, index) => {
    return (
      <div className="w-1/2 p-2">
        <div className="card bg-base-300 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt={god.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {god.name}
              <div className="badge badge-primary">{god.summary.pantheon}</div>
            </h2>
            <p>{god.summary.title} {god.summary.pros}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{god.summary.class}</div>
              <div className="badge badge-outline">{god.summary.type}</div>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>
  );
};

export default GodList;
