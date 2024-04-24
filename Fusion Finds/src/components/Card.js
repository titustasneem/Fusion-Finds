import { IoMdInformationCircleOutline } from "react-icons/io";

const Card = ({ img, title, description, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-description">
            <span className="total-description">{description}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="info">
              <IoMdInformationCircleOutline className="info-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
