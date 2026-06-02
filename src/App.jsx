import { categories } from "./data/categories";
import CategoryCard from "./components/CategoryCard";

function App() {
  return (
    <main>
      <section>
      <h1>Southern Edge Cricket</h1>
      <p>Premium cricket equipment for players who demand performance and precision.</p>
      <button>Shop Now</button>
      </section>

      <section>
        <h2>Featured Categories</h2>

       {categories.map((category) => (
        <CategoryCard
        key={category.id}name={category.name}
        />
       ))}
      </section>
      
    </main>
  )
}

export default App;
