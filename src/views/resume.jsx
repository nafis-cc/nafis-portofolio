import { useState } from "react";
import { BsFillMortarboardFill, BsBriefcaseFill } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiFileDownloadFill } from "react-icons/ri";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa"; 
import { Timeline } from "~/components";
import { schools, offices, groups } from "~/models";
import { handleOpenResume } from "~/scripts/app";

function Resume({ ICON_SIZE = 26 }) {
  // State untuk menampilkan semua item
  const [showAllSchools, setShowAllSchools] = useState(false);
  const [showAllOffices, setShowAllOffices] = useState(false);
  const [showAllGroups, setShowAllGroups] = useState(false);

  const handleShowAll = (type) => {
    if (type === "schools") setShowAllSchools((prev) => !prev);
    if (type === "offices") setShowAllOffices((prev) => !prev);
    if (type === "groups") setShowAllGroups((prev) => !prev);
  };

  // Fungsi menambahkan item discover/tutup tanpa mengubah data asli
  const addDiscoverMore = (array, showAll) => {
    if (array.length <= 3) return [...array];

    if (showAll) {
      // Tambahkan "Close, Just Discover Less" di akhir
      return [...array, { name: "Close, Just Discover Less", isDiscoverMore: true }];
    } else {
      // Tambahkan "And discover more" di index ke-3
      return [
        ...array.slice(0, 3),
        { name: "And discover more", isDiscoverMore: true },
        ...array.slice(3),
      ];
    }
  };

  // Render timeline agar lebih DRY
  const renderTimeline = (items, showAll, type, extraProps = {}) => {
    const listWithDiscover = addDiscoverMore(items, showAll);
    const sliceLength = showAll ? listWithDiscover.length : 4;

    return listWithDiscover.slice(0, sliceLength).reverse().map((item, index) =>
      item.isDiscoverMore ? (
        <li
          key={`discover-${type}-${index}`}
          onClick={() => handleShowAll(type)}
          className="timeline-item"
          style={{ cursor: "pointer", display: "flex", gap: "8px" }}
        >
          <h4 className="h4 timeline-item-title">
            {showAll ? "Close, Just Discover Less" : "And discover more"}
          </h4>
          {showAll ? (
            <FaChevronCircleUp size={20} className="sidebar-icon" /> // icon untuk close
          ) : (
            <FaChevronCircleDown size={20} className="sidebar-icon" /> // icon untuk discover more
          )}
        </li>
      ) : (
        <li className="timeline-item" key={`${type}-${index}`}>
          <Timeline
            id= {index+1}
            name={item.name}
            link={item.link}
            location={item.location}
            from={item.from}
            until={item.until}
            {...extraProps}
          />
        </li>
      )
    );
  };

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Experience */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BsBriefcaseFill size={ICON_SIZE} />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {renderTimeline(offices, showAllOffices, "offices", { position: true })}
        </ol>
      </div>

      {/* Education */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BsFillMortarboardFill size={ICON_SIZE} />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {renderTimeline(schools, showAllSchools, "schools", { study: true })}
        </ol>
      </div>

      {/* Organization */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <HiMiniUserGroup size={ICON_SIZE} />
          </div>
          <h3 className="h3">Organization</h3>
        </div>
        <ol className="timeline-list">
          {renderTimeline(groups, showAllGroups, "groups", { position: true })}
        </ol>
      </div>

      {/* Download Resume */}
      <div className="timeline">
        <button className="btn-resume" onClick={handleOpenResume}>
          <RiFileDownloadFill size={ICON_SIZE} />
          <h4 className="h4">Download Resume</h4>
        </button>
      </div>
    </section>
  );
}

export default Resume;
