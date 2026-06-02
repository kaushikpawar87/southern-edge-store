import Hero from "./components/Hero";
import { categories } from "./data/categories";
import CategoryCard from "./components/CategoryCard";

function App() {
  return (
    <main className="container">
      <Hero />
      <section>
        <h2>Featured Categories</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id} name={category.name} description={category.description}
            />
          ))}
        </div>

      </section>

    </main>
  )
}

export default App;
