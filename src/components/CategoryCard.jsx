import "../styles/category-card.css"

function CategoryCard({name, description}) {
    return (
        <div className="category-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <button>Browse</button>
        </div>
    );
}

export default CategoryCard;