import { useState } from "react";
import { BsFillMortarboardFill, BsBriefcaseFill } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiFileDownloadFill } from "react-icons/ri";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import { HiPresentationChartLine } from "react-icons/hi";
import { Timeline } from "~/views/shared/components";
import { schools, offices, groups, learns } from "~/models";
import { handleOpenResume } from "~/scripts/app";

const reversedSchools = [...schools].reverse();
const reversedOffices = [...offices].reverse();
const reversedGroups = [...groups].reverse();
const reversedLearns = [...learns].reverse();

function Resume({ ICON_SIZE = 26 }) {
  const [showAllSchools, setShowAllSchools] = useState(false);
  const [showAllOffices, setShowAllOffices] = useState(false);
  const [showAllGroups, setShowAllGroups] = useState(false);
  const [showAllLearns, setShowAllLearns] = useState(false);

  const handleShowAll = (type) => {
    if (type === "schools") setShowAllSchools((prev) => !prev);
    if (type === "offices") setShowAllOffices((prev) => !prev);
    if (type === "groups") setShowAllGroups((prev) => !prev);
    if (type === "learns") setShowAllLearns((prev) => !prev);
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
  const renderTimeline = (items, showAll, type) => {
    const listWithDiscover = addDiscoverMore(items, showAll);
    const sliceLength = showAll ? listWithDiscover.length : 4;

    return listWithDiscover.slice(0, sliceLength).map((item, index) =>
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
            <FaChevronCircleUp size={20} className="sidebar-icon" />
          ) : (
            <FaChevronCircleDown size={20} className="sidebar-icon" />
          )}
        </li>
      ) : (
        <li className="timeline-item" key={`${type}-${index}`}>
          <Timeline
            id={index + 1}
            name={item.name}
            link={item.link}
            location={item.location}
            from={item.from}
            until={item.until}
            study={type === "schools" || type === "learns" ? item.study : undefined} // Menambahkan study jika type "schools" atau "learns"
            position={type === "offices" || type === "groups" ? item.position : undefined} // Menambahkan position jika type "offices" atau "groups"
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
          {renderTimeline(reversedOffices, showAllOffices, "offices")}
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
          {renderTimeline(reversedSchools, showAllSchools, "schools")}
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
        <ol className="timeline-list">{renderTimeline(reversedGroups, showAllGroups, "groups")}</ol>
      </div>

      {/* Bootcamp */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <HiPresentationChartLine size={ICON_SIZE} />
          </div>
          <h3 className="h3">Bootcamp</h3>
        </div>
        <ol className="timeline-list">{renderTimeline(reversedLearns, showAllLearns, "learns")}</ol>
      </div>

      <button className="btn-resume" onClick={handleOpenResume}>
        <RiFileDownloadFill size={ICON_SIZE} />
        <h4 className="h4">Download Resume</h4>
      </button>
    </section>
  );
}

export default Resume;
