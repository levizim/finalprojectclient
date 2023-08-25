import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const IngredientsPage = () => {
  const ingredients = [
    { name: "Lion's Mane", image: "/path/to/lions-mane.jpg", text: "Lion's Mane is a unique mushroom known for its potential cognitive benefits. It may support brain health and mental clarity." },
    { name: "Reishi", image: "/path/to/reishi.jpg", text: "Reishi mushroom, also known as the 'Mushroom of Immortality,' is believed to have various health-promoting properties, including immune system support." },
    { name: "Chaga", image: "/path/to/chaga.jpg", text: "Chaga mushroom is rich in antioxidants and is often praised for its potential immune-boosting and anti-inflammatory properties." },
    { name: "Cordyceps", image: "/path/to/cordyceps.jpg", text: "Cordyceps is known for its potential to enhance physical performance and endurance. It may also have immune-modulating effects." },
    { name: "Turkey Tail", image: "/path/to/turkey-tail.jpg", text: "Turkey Tail mushroom is recognized for its immune-supportive properties. It contains compounds that may help promote overall wellness." },
    { name: "Shiitake", image: "/path/to/shiitake.jpg", text: "Shiitake mushrooms are popular for their rich flavor and potential health benefits. They contain various nutrients and bioactive compounds." },
  ];
  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>

      <section className="container ">
        <h2 className="text-center py-3">Ingredients</h2>
        {ingredients.map((ingredient, index) => (
          <div
            key={ingredient.name}
            className={`row mt-4${index % 2 === 0 ? '' : ' flex-row-reverse'}`}
          >
            <div className="col-md-6">
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className="img-fluid"
                style={{ borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.15)' }}
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h3>{ingredient.name}</h3>
              <p>{ingredient.text}</p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default IngredientsPage;
