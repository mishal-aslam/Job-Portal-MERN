import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import SideBar from "../SideBar/sideBar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);
  // console.log(jobs);

  // handle input change
  const [query, setQuery] = useState("");
  const handleInputchange = (event) => {
    setQuery(event.target.value);
  };

  // filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  // console.log(filteredItems);

  //----------------- radio filtering----------------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  // ----buuton based filtering --------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // MAIN FUNCTION
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // filter input iterms
    if (query) {
      filteredJobs = filteredItems;
    }

    // categorry filteing
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) === parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);
  return (
    <div>
      <Banner query={query} handleInputchange={handleInputchange} />
      {/* main content  */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side  */}
        <div className="bg-white p-4 rounded">
          <SideBar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* job cards  */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No Data Found!</p>
            </>
          )}
        </div>

        {/* right side  */}
        <div className="bg-white p-4 rounded">Right</div>
      </div>
    </div>
  );
};

export default Home;
