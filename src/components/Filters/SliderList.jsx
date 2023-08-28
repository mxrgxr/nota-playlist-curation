import SliderItem from "./SliderItem";
import { categories } from "./categories";

export default function SliderList() {
    return (
      <div>
        {categories.map((category) => (
          <SliderItem key={category.title} category={category} />
        ))}
      </div>
    );
}