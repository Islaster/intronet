import { useState } from "react";
import "./style.css";

export default function JobBoard() {
  const [inputTog, setInputTog] = useState(false);
  const [jobs, setJobs] = useState([]);
  function buttonToInput() {
    setInputTog((v) => !v);
  }
  function renderInput() {
    if (inputTog) {
      return (
        <>
          <input type="file" name="resume" id="resume" />
          <span>
            <button type="submit" onClick={() => setInputTog(false)}>
              filter
            </button>
            <button className="cancel" onClick={() => setInputTog(false)}>
              cancel
            </button>
          </span>
        </>
      );
    } else {
      return <button onClick={() => buttonToInput()}>Search by resume</button>;
    }
  }
  //add google search api on the backend
  function renderListOfJobs() {
    if (jobs) {
      return (
        <ul>
          {jobs.map((job) => (
            <li>{job}</li>
          ))}
        </ul>
      );
    } else {
      return (
        <div>
          <h2>Jobs not found.</h2>
          <h3>Try less filters.</h3>
        </div>
      );
    }
  }
  return (
    <>
      <form>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search by job title, tech stack, company, etc."
        />
        <label htmlFor="role">Role: </label>
        <input type="text" name="role" id="role" />
        <label htmlFor="skills">Skills: </label>
        <input type="text" name="skills" id="skills" />
        <label htmlFor="commitment">Commitment: </label>
        <select name="commiment" id="commitment">
          <option value="ft">Fulltime</option>
          <option value="pt">Parttime</option>
          <option value="contract">Contract</option>
          <option value="intern">Intern</option>
          <option value="all">All</option>
        </select>
        <label htmlFor="location">Location: </label>
        <input type="text" name="location" id="location" />
        <button type="submit">Filter</button>
      </form>
      {renderInput()}
      {renderListOfJobs()}
    </>
  );
}
