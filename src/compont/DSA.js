
import React from "react";
import "./DSA.css";

const topics = [
  {
    icon: "🔢",
    title: "Arrays & Strings",
    description: "Searching, sorting, two pointers, sliding window and string problems.",
    level: "Beginner to Advanced",
  },
  {
    icon: "🔗",
    title: "Linked Lists",
    description: "Reversal, cycle detection, merging lists and pointer techniques.",
    level: "Beginner to Intermediate",
  },
  {
    icon: "📚",
    title: "Stack & Queue",
    description: "Monotonic stacks, queue operations and next greater element.",
    level: "Beginner to Intermediate",
  },
  {
    icon: "🌳",
    title: "Trees & BST",
    description: "Traversals, binary search trees, height and tree-based problems.",
    level: "Intermediate",
  },
  {
    icon: "🕸️",
    title: "Graphs",
    description: "BFS, DFS, shortest paths and graph traversal algorithms.",
    level: "Intermediate to Advanced",
  },
  {
    icon: "🧩",
    title: "Dynamic Programming",
    description: "Memoization, tabulation, subsequences and optimization problems.",
    level: "Advanced",
  },
  {
    icon: "🔍",
    title: "Searching & Sorting",
    description: "Binary search, merge sort, quick sort and efficient algorithms.",
    level: "Beginner to Advanced",
  },
  {
    icon: "⚡",
    title: "Recursion & Backtracking",
    description: "Subsets, permutations, combinations and recursive problem solving.",
    level: "Intermediate",
  },
];

const skills = [
  "C++",
  "STL",
  "Arrays",
  "Linked Lists",
  "Stack & Queue",
  "Trees",
  "Graphs",
  "Dynamic Programming",
  "Time Complexity",
  "Space Complexity",
];

function DSA() {
  return (
    <main className="dsa-page">
      <header className="dsa-hero">
        <span className="dsa-eyebrow">CODING • LOGIC • PROBLEM SOLVING</span>

        <h1>
          Data Structures & <span>Algorithms</span>
        </h1>

        <h2>Problem Solving with C++</h2>

        <p>
          Practicing data structures and algorithms to improve logical
          thinking, write efficient code, and prepare for technical
          interviews.
        </p>

        <div className="dsa-hero-actions">
          <a
            href="https://leetcode.com/u/Bittu900/"
            target="_blank"
            rel="noreferrer"
            className="dsa-primary-btn"
          >
            🟠 Visit My LeetCode ↗
          </a>

          <a
            href="https://github.com/bittu90060"
            target="_blank"
            rel="noreferrer"
            className="dsa-secondary-btn"
          >
            GitHub Profile ↗
          </a>
        </div>
      </header>

      {/* <section className="dsa-profile-card">
        <div className="dsa-profile-icon">{"</>"}</div>

        <div className="dsa-profile-info">
          <span className="dsa-label">CODING PROFILE</span>
          <h2>LeetCode — Bittu900</h2>
          <p>
            Explore my coding profile, submitted solutions, and
            problem-solving practice.
          </p>
        </div>

        <a
          href="https://leetcode.com/u/Bittu900/"
          target="_blank"
          rel="noreferrer"
          className="dsa-profile-link"
        >
          View Profile ↗
        </a>
      </section> */}

      <section className="dsa-section">
        <div className="dsa-section-heading">
          <div>
            <span className="dsa-label">MY LEARNING ROADMAP</span>
            <h2>DSA Topics in C++</h2>
          </div>
          <span className="dsa-topic-count">{topics.length} Topics</span>
        </div>

        <div className="dsa-topics-grid">
          {topics.map((topic, index) => (
            <article className="dsa-topic-card" key={topic.title}>
              <div className="dsa-topic-top">
                <span className="dsa-topic-icon">{topic.icon}</span>
                <span className="dsa-topic-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{topic.title}</h3>
              <p>{topic.description}</p>

              <span className="dsa-level">{topic.level}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="dsa-section">
        <div className="dsa-section-heading">
          <div>
            <span className="dsa-label">TECHNICAL SKILLS</span>
            <h2>My C++ Toolkit</h2>
          </div>
        </div>

        <div className="dsa-skills-list">
          {skills.map((skill) => (
            <span className="dsa-skill-chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* <section className="dsa-cta">
        <div>
          <span className="dsa-label">LET'S KEEP LEARNING</span>
          <h2>One Problem at a Time 🚀</h2>
          <p>
            Follow my coding journey and explore my solutions on LeetCode.
          </p>
        </div>

        <a
          href="https://leetcode.com/u/Bittu900/"
          target="_blank"
          rel="noreferrer"
          className="dsa-primary-btn"
        >
          Explore LeetCode ↗
        </a>
      </section> */}
    </main>
  );
}

export default DSA;
