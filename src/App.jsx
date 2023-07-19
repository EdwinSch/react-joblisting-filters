import { useState } from "react";
import JobsOverview from "./components/JobsOverview";
import data from "./data.json";

// Map buttons from data
const mapRoles = data.map((item) => item.role);
const rolesSet = new Set(mapRoles);
const mapLevels = data.map((item) => item.level);
const levelsSet = new Set(mapLevels);

const newBtnsCollection = [...rolesSet, ...levelsSet, "clear filter"];

function App() {
  const [jobs, setJobs] = useState(data);
  const [buttons, setButtons] = useState(newBtnsCollection);

  // Filter Buttons Function
  const filterJobs = (cat) => {
    // Clear Filter Btn
    if (cat === "clear filter") {
      setJobs(data);
      return;
    }

    // Filter by category
    const newJobs = data.filter((job) => job.role === cat || job.level === cat);
    // console.log(cat);
    setJobs(newJobs);
  };

  return (
    <>
      <header>{/* CSS dynamic */}</header>
      <main>
        <JobsOverview jobs={jobs} buttons={buttons} filterJobs={filterJobs} />
      </main>
    </>
  );
}

export default App;
