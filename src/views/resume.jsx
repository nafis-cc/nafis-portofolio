import { BsFillMortarboardFill, BsBriefcaseFill } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiFileDownloadFill } from "react-icons/ri";
import { Timeline } from "~/components";
import { schools, offices, groups } from "~/models";
import { handleOpenResume } from '~/scripts/app';

function Resume({ ICON_SIZE = 26 }) {
  return (
    <>
      <section>
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <div className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <BsBriefcaseFill size={ICON_SIZE} />
            </div>
            <h3 className="h3">Experience</h3>
          </div>
          <ol className="timeline-list">
            {offices.slice().reverse().map((item, index) => (
              <Timeline
                key={index}
                name={item.name}
                link={item.link}
                location={item.location}
                from={item.from}
                until={item.until}
                position={item.position}
              />
            ))}
          </ol>
        </div>

        <div className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <BsFillMortarboardFill size={ICON_SIZE} />
            </div>
            <h3 className="h3">Education</h3>
          </div>
          <ol className="timeline-list">
            {schools.slice().reverse().map((item, index) => (
              <Timeline
                key={index}
                name={item.name}
                link={item.link}
                location={item.location}
                from={item.from}
                until={item.until}
                study={item.study}
              />
            ))}
          </ol>
        </div>

        <div className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <HiMiniUserGroup size={ICON_SIZE} />
            </div>
            <h3 className="h3">Organization</h3>
          </div>
          <ol className="timeline-list">
            {groups.slice().reverse().map((item, index) => (
              <Timeline
                key={index}
                name={item.name}
                link={item.link}
                location={item.location}
                from={item.from}
                until={item.until}
                position={item.position}
              />
            ))}
          </ol>
        </div>

        <div className="timeline">
          <button className="btn-resume" onClick={handleOpenResume}>
            <RiFileDownloadFill size={ICON_SIZE} />
            <h4 className="h4">Download Resume</h4>
          </button>
        </div>
      </section>
    </>
  );
}

export default Resume;
