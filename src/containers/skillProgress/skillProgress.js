import React, { useContext } from "react";
import "./Progress.css";
import { techStack, greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StackProgress() {
  const { isDark } = useContext(StyleContext);
  if (!techStack.viewSkillBars) {
    return null;
  }

  // Generate a random activity grid mapping for the aesthetic (Github style, mostly empty, some green)
  const activityGrid = Array.from({ length: 7 * 48 }).map(() => {
    const rand = Math.random();
    if (rand < 0.7) return 0;
    if (rand < 0.85) return 1;
    if (rand < 0.92) return 2;
    if (rand < 0.97) return 3;
    return 4;
  });

  return (
    <div className={isDark ? "dark-mode dashboard-section" : "dashboard-section"}>
      <Fade bottom duration={1000} distance="20px">
        <div className="dashboard-wrapper">

          <div className="dashboard-container">

            {/* Dashboard Header */}
            <div className="dashboard-header">
              <h2 className="proficiency-heading">Proficiency</h2>
              <div className="dashboard-controls">
                <div className="dash-pill">Overview</div>
              </div>
            </div>

            {/* Top Stat Cards */}
            <div className="dashboard-stats-grid">
              {techStack.experience.map((exp, i) => (
                <div className="stat-card" key={`stat-${i}`}>
                  <p className="stat-title">{exp.Stack}</p>
                  <div className="stat-value-row">
                    <h3 className="stat-value">{exp.progressPercentage}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Chart Area */}
            <div className="dashboard-main-row">

              {/* Bar Chart Panel */}
              <div className="dashboard-panel chart-panel">
                <div className="panel-header">
                  <h3>Skills</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="chart-container">
                  {techStack.experience.map((exp, i) => (
                    <div className="chart-bar-group" key={`bar-${i}`}>
                      <div className="chart-bar-bg">
                        <div className="chart-bar-fill" style={{ height: exp.progressPercentage }}></div>
                      </div>
                      <span className="chart-label">{exp.Stack.split(" ")[0]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Years Panel */}
              <div className="dashboard-panel years-panel">
                <div className="years-list">
                  <button className="year-btn active">2026</button>
                  <button className="year-btn">2025</button>
                  <button className="year-btn">2024</button>
                  <button className="year-btn">2023</button>
                  <button className="year-btn">2022</button>
                </div>
              </div>
            </div>

            {/* Activity Grid Panel - Full Width */}
            <div className="dashboard-panel activity-panel full-width">
              <div className="activity-panel-inner">
                <div className="activity-grid-wrapper">
                  <div className="activity-days">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>
                  <div className="activity-grid-scroll">
                    <div className="activity-months">
                      <span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
                    </div>
                    <div className="activity-grid">
                      {activityGrid.map((intensity, i) => (
                        <div className={`activity-cell intensity-${intensity}`} key={`cell-${i}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="activity-footer">
                  <div className="activity-legend">
                    <span>Less</span>
                    <div className="activity-cell intensity-0"></div>
                    <div className="activity-cell intensity-1"></div>
                    <div className="activity-cell intensity-2"></div>
                    <div className="activity-cell intensity-3"></div>
                    <div className="activity-cell intensity-4"></div>
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Fade>
    </div>
  );
}
