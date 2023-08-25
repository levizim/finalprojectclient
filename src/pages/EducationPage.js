import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const articleLinks = [
  {
    title: "The Benefits of Adaptogenic Mushrooms",
    link: "https://www.healthline.com/nutrition/adaptogenic-mushrooms",
    image: "/path/to/healthline-image.jpg",
    preview: "Discover the amazing benefits of adaptogenic mushrooms...",
  },
  {
    title: "Your Guide to Adaptogenic Mushrooms",
    link: "https://www.mindbodygreen.com/articles/adaptogenic-mushrooms-guide",
    image: "/path/to/mindbodygreen-image.jpg",
    preview: "Explore a comprehensive guide to adaptogenic mushrooms...",
  },
  {
    title: "Exploring the Power of Medicinal Mushrooms",
    link: "https://helloglow.co/medicinal-mushrooms/",
    image: "/path/to/helloglow-image.jpg",
    preview: "Dive into the world of medicinal mushrooms and their benefits...",
  },
];

const EducationPage = () => {
  return (
    <div>

      <section className="container mt-4">
        <h2>Education</h2>
        {articleLinks.map((article) => (
          <div key={article.title} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={article.image} alt={article.title} className="img-fluid" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.preview}</p>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default EducationPage;
