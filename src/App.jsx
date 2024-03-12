import React, {useState} from "react"
import Job from "./components/Job"
import Header from "./components/Header";
import useFetch from "./useFetch"

export default function App () {
  const [jobs] = useFetch("../data.json");
  const [filters, setFilters] = useState([]);
  
  function removeFilter(filterTerm) {
    setFilters(prevState => prevState.filter(filter => filter !== filterTerm));
  }

  function clearFilters () {
    setFilters([]);
  }

  function addFilter (filter) {
    if (!filters.includes(filter)) {
      setFilters(prevState => [...prevState, filter]);
    }
  }

  return (
    <>
      <Header 
      filters={filters} 
      removeFilter={removeFilter} 
      clearFilters={() => clearFilters()} 
      />
      <div className="container flex flex-col gap-12 items-center lg:gap-6">
        {jobs && jobs.filter(job => {
          let valid = true;
          filters.forEach(filter => {
            if (!job.languages.includes(filter) && !job.tools.includes(filter) && job.role !== filter && job.level !== filter) {
              valid = false;
            }
          })
          return valid;
        }).map(job => <Job key={job.id} {...job} addFilter={addFilter}/>)}
      </div>
    </>
  )
}