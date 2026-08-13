'use strict';

export const handleOpenNafisPortofolio = () => {
  window.location.href = "https://www.nafis.cc";
};

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

export function initSidebarToggle() {
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  if (sidebar && sidebarBtn) {
    const toggle = () => sidebar.classList.toggle("active");
    sidebarBtn.addEventListener("click", toggle);
    // Optional: return cleanup function
    return () => sidebarBtn.removeEventListener("click", toggle);
  }
}

export function initContactFormValidation() {
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  function validate() {
    if (form && formBtn) {
      let allValid = true;
      for (let i = 0; i < formInputs.length; i++) {
        const input = formInputs[i];
        const value = input.value.trim();

        if (input.type === "email") {
          // Validasi email sederhana
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!value || !emailPattern.test(value)) {
            allValid = false;
            break;
          }
        } else if (input.type === "text") {
          // Validasi text: tidak boleh kosong dan bukan hanya angka
          if (!value || /^\d+$/.test(value)) {
            allValid = false;
            break;
          }
        } else if (input.type === "textarea" || input.tagName === "TEXTAREA") {
          if (!value) {
            allValid = false;
            break;
          }
        } else {
          if (!value) {
            allValid = false;
            break;
          }
        }
      }
      if (allValid) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    }
  }

  if (form && formInputs && formBtn) {
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener("input", validate);
    }
    // Jalankan validasi awal
    validate();

    // Cleanup function
    return () => {
      for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].removeEventListener("input", validate);
      }
    };
  }
}