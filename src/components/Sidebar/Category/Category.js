import "./Category.css";
import Input from "../../Input";

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
          value="keychain"
          title="Keychains"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="bag_tag"
          title="Bag tag"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="minifigure"
          title="Minifigures"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="matrix"
          title="LED Matrix"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;