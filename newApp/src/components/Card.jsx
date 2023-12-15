import "./card.css";
const Card = () => {
  return (
    <>
      <div className="container">
        <div className="images">
          <a href="">
            <div className="grid-items">
              <div className="div-img">
                <img src="" alt="product_pic" />
              </div>
              <div className="padding-1">
                <ul className="detail-list-2">
                  <li className="prodName">name</li>
                  <li className="prodPrice">Rs price</li>
                </ul>
              </div>
            </div>
          </a>
          <a href="">
            <div className="grid-items">
              <div className="div-img">
                <img src="" alt="product_pic" />
              </div>
              <div className="padding-1">
                <ul className="detail-list-2">
                  <li className="prodName">name</li>
                  <li className="prodPrice">Rs price</li>
                  <li className="prodPrice">Rs price</li>
                  <li className="prodPrice">Rs price</li>
                  <li className="prodPrice">Rs price</li>
                </ul>
              </div>
            </div>
          </a>
          <a href="">
            <div className="grid-items">
              <div className="div-img">
                <img src="" alt="product_pic" />
              </div>
              <div className="padding-1">
                <ul className="detail-list-2">
                  <li className="prodName">name</li>
                  <li className="prodPrice">Rs price</li>
                </ul>
              </div>
            </div>
          </a>
          <a href="">
            <div className="grid-items">
              <div className="div-img">
                <img src="" alt="product_pic" />
              </div>
              <div className="padding-1">
                <ul className="detail-list-2">
                  <li className="prodName">name</li>
                  <li className="prodPrice">Rs price</li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="sbc">
        <button className="sb">Previous</button>
        <button className="sb">Next</button>
      </div>
    </>
  );
};
export default Card;
