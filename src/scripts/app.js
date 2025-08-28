export const handleOpenLinkedin = () => {
  const url = "https://www.linkedin.com/in/nafiss";
  window.open(url, "_blank");
};

export const handleOpenResume = () => {
  const url = "https://app.kinobi.ai/resume/64df3856d7e268001cfe6693";
  window.open(url, "_blank");
};

export const handleFilterClick = (category, getProjects, setSelectedCategory, setFilteredProjects) => {
  setSelectedCategory(category);

  if (category === "All") {
    setFilteredProjects(getProjects);
  } else {
    const filtered = getProjects.filter(item => item.category === category);
    setFilteredProjects(filtered);
  }
};


