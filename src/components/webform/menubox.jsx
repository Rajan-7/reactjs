import React from "react";

const MenuCard = ({menu}) => {
  // console.log(menu);
  return (
    <>
      <section className="main-card-container">
        {menu.map((curElm) => {
          const {id,name,category,description,image}=curElm;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle">{id}</span>
                    <span className="card-title subtle">{category}</span>
                    <h2 className="card-name">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img
                    src={image}
                    alt="p"
                    className="card-image"
                  />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })};
      </section>
    </>
  );
};

export default MenuCard;
