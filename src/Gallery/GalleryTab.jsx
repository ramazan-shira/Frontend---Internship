import { categories } from "../constants";
import "./gallery.css";

const GalleryTab = (props) => {
  const { selectedCategory, setSelectedCategory } = props;

  const selectedIndex = categories.findIndex(
    (category) => category.id === selectedCategory
  );

  const tabsArray = [
    categories[(selectedIndex + 1) % 3],
    categories[selectedIndex],
    categories[(selectedIndex + 2) % 3],
  ];

  const handleCategory = (id) => {
    if (selectedCategory !== id) {
      setSelectedCategory(id);
    }
  };
  return (
    <div className="gallery-tabs">
      {tabsArray.map((category) => (
        <div
          className={category.id === selectedCategory ? "active" : ""}
          key={category.id}
          onClick={() => handleCategory(category.id)}
        >
          {category.title}
        </div>
      ))}
    </div>
  );
};

export default GalleryTab;
