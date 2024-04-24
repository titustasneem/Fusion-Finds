import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sweets"
          title="Sweets"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="chips"
          title="Chips"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="chocolate"
          title="Chocolates"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="biscuits"
          title="Biscuits"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
