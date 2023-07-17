import { useState } from "react";
import JobsOverview from "./components/JobsOverview";
import data from "./data.json";

function App() {
  const [jobs, setJobs] = useState(data);

  return (
    <>
      <header>{/* CSS dynamic */}</header>
      <main>
        <JobsOverview jobs={jobs} />
      </main>
    </>
  );
}

export default App;
