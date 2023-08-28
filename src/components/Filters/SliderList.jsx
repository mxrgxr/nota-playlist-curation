import SliderItem from "./SliderItem";
import { categories } from "./categories";

export default function SliderList() {
  return (
    <div>
      <p>For best curation, please select values for at least 3 categories.</p>
      {categories.map((category, index) => (
        <div
          key={category.title}
          className={`p-8 first:rounded-t-lg last:rounded-b-lg ${
            index % 2 === 0 ? "bg-s-50" : "bg-s-100"
          }`}
        >
          <SliderItem category={category}/>
        </div>
      ))}
    </div>
  );
}