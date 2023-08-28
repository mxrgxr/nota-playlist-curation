import SliderItem from "./SliderItem";
import { categories } from "./categories";

export default function SliderList() {
  return (
    <div>
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