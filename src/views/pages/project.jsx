import { useState } from "react";
import { projects } from "~/models";
import { FaSearch } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { handleFilterClick } from "~/scripts/app";

const listProject = projects.slice().reverse();

function Project() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(listProject);
  const [currentPage, setCurrentPage] = useState(1);
  const [showOtherModal, setShowOtherModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOther, setSelectedOther] = useState(null);

  const postsPerPage = 4;

  // Hitung jumlah category lalu urutkan
  const categoryCount = projects.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const allCategories = Object.keys(categoryCount).sort(
    (a, b) => categoryCount[b] - categoryCount[a]
  );

  // Ambil 2 category terbanyak
  const fixedCategories = allCategories.slice(0, 2);

  // Category yang belum dipakai
  const remainingCategories = allCategories.filter(
    (cat) => !fixedCategories.includes(cat) && cat !== selectedOther
  );

  // Category list yang tampil
  const categories = ["All", ...fixedCategories];
  if (selectedOther) categories.push(selectedOther);
  categories.push("Other");

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredProjects.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleFilter = (category) => {
    if (category === "Other") {
      setShowOtherModal(true);
    } else {
      handleFilterClick(category, listProject, setSelectedCategory, setFilteredProjects);
      setCurrentPage(1);
    }
  };

  const handleSelectOther = (cat) => {
    setSelectedOther(cat);
    setShowOtherModal(false);
    setSearchTerm("");
    handleFilterClick(cat, listProject, setSelectedCategory, setFilteredProjects);
    setCurrentPage(1);
  };

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Portofolio</h2>
      </header>

      {/* CATEGORY LIST */}
      <ul className="filter-list">
        {categories.map((item, index) => (
          <li key={index} className="filter-item">
            <button
              onClick={() => handleFilter(item)}
              className={item === selectedCategory ? "active" : ""}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      {/* BLOG LIST */}
      <div className="blog-posts">
        <ul className="blog-posts-list">
          {currentPosts.map((item, index) => (
            <li
              key={index}
              className="blog-post-item"
              data-category={item.category}
            >
              <a href={item.link}>
                <figure className="blog-banner-box">
                  <div className="blog-item-icon-box">
                    <FaSearch />
                  </div>
                  {item.image ? (
                    <img src={item.image} alt={item.title} loading="lazy" />
                  ) : (
                    <div className="blog-banner-iframe-wrapper">
                      <iframe
                        src={item.link}
                        title={item.title}
                        className="blog-banner-iframe"
                        tabIndex={-1}
                      />
                    </div>
                  )}
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{item.category}</p>
                    <span className="dot"></span>
                    <time dateTime={item.date}>{item.date}</time>
                  </div>
                  <h4 className="h4 blog-item-title">{item.title}</h4>
                  <p className="blog-text">{item.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* PAGINATION */}
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              onClick={() => paginate(currentPage - 1)}
              className="page-link"
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: Math.ceil(filteredProjects.length / postsPerPage) }, (_, index) => (
            <li
              key={index + 1}
              className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
            >
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === Math.ceil(filteredProjects.length / postsPerPage) ? "disabled" : ""
            }`}
          >
            <button
              onClick={() => paginate(currentPage + 1)}
              className="page-link"
              disabled={currentPage === Math.ceil(filteredProjects.length / postsPerPage)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

      {/* OTHER MODAL */}
      {showOtherModal && (
        <div
          className="modal-backdrop"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <div
            className="modal-content"
            style={{
              background: "rgb(11 17 32)",
              border: "1px solid hsl(0, 0%, 22%)",
              padding: "20px",
              borderRadius: "16px",
              width: "300px",
              maxHeight: "400px",
              overflow: "hidden",
              boxShadow: "0 24px 80px hsla(0, 0%, 0%, 0.5)",
              position: "relative",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowOtherModal(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "hsl(0, 0%, 84%)",
              }}
            >
              <IoCloseCircleOutline size={28} />
            </button>

            <h3 style={{ marginBottom: "10px", color: "hsl(0, 0%, 98%)", fontSize: "16px" }}>Choose Category</h3>
            <input
              type="text"
              placeholder="Search category..."
              style={{
                width: "100%",
                padding: "8px 12px",
                marginBottom: "10px",
                background: "hsl(240, 1%, 17%)",
                border: "1px solid hsl(0, 0%, 22%)",
                borderRadius: "8px",
                color: "hsl(0, 0%, 84%)",
                fontSize: "13px",
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul
              style={{
                maxHeight: "150px",
                overflowY: "auto",
                border: "1px solid hsl(0, 0%, 22%)",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            >
              {remainingCategories
                .filter((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((cat, i) => (
                  <li
                    key={i}
                    style={{
                      padding: "8px 12px",
                      cursor: "pointer",
                      borderBottom: "1px solid hsl(240, 2%, 13%)",
                      color: "hsl(0, 0%, 84%)",
                      fontSize: "13px",
                      transition: "background 0.2s ease, color 0.2s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "hsl(240, 1%, 17%)"; e.currentTarget.style.color = "#14b8a6"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "hsl(0, 0%, 84%)"; }}
                    onClick={() => handleSelectOther(cat)}
                  >
                    {cat}
                  </li>
                ))}
              {remainingCategories.length === 0 && (
                <li style={{ padding: "8px 12px", color: "hsla(0, 0%, 84%, 0.7)", fontSize: "13px" }}>
                  There are no other categories
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
