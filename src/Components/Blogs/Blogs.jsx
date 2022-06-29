import React, { useEffect, useState } from "react";
import blogs from "./blogs.json";

export default function Blogs() {
  const [page, setpage] = useState([]);
  const [page_count, setPage_count] = useState([]);
  const [current_page, setcurrentpage] = useState(1);
  useEffect(() => {
    let currentpage = [];
    let pages = []
    for (let index = 0; index < 4; index++) {
      currentpage.push(blogs[index]);
    }
    setpage(currentpage);
  let x = (Math.round(blogs.length / 4))
  console.log(x);
    for (let index = 1; index <=x+1; index++) {
      pages.push(index)
      console.log(index);
    }
    setPage_count(pages)
  }, []);

  return (
    <div className="container">
      <h1>Blogs</h1>
      <div className="row">
        {page.length === 0 ? (
          <>Jim turing Shovqinlik</>
        ) : (
          <>
            {page.map((arr, index) => {
              return (
                <div className="col-12" key={index}>
                  <div className="card mt-5 p-2 shadow">
                    <h1 className=" pt-2">{arr.title}</h1>
                    <i className="text-success pt-2">{arr.date}</i>
                    <p className=" pt-2">{arr.descripyion}</p>
                    <button className="">Batafsil</button>
                  </div>
                </div>
              );
            })}

            <div className="w-100 d-flex flex-row justify-content-center">
              {
              page_count.map((vl, index) => {
                return (
                  <div className="pages m-2 " key={index}>
                    <button className="px-3 py1 btn-primary btn">{vl}</button>
                  </div>
                );
              })
              }
            </div>
          </>
        )}
      </div>
    </div>
  );
}
