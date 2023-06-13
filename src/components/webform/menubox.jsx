import React from "react";

const MenuCard = ({menuData}) => {
  // console.log(menuData);
  return (
    <>
      <section className="main-card-container">
        {menuData.map((curElm) => {
          return (
            <>
              <div className="card-container" key={curElm.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle">1</span>
                    <span className="card-title subtle">Breakfast</span>
                    <h2 className="card-name">Maggi</h2>
                    <span className="card-description subtle">
                      Maggi is usally eaten as breakfast in all around the
                      worlds regions.
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img
                    src="./images/maggi.jpeg"
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
