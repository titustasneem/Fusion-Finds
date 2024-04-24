import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="sweets" title="Sweets" />
          <Button onClickHandler={handleClick} value="chips" title="Chips" />
          <Button onClickHandler={handleClick} value="chocolate" title="Chocolates" />
          <Button onClickHandler={handleClick} value="biscuits" title="Biscuits" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
