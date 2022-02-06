import React from 'react';
import Job from './Job';
 
const FetchJobs = ({ jobs }) => {

  return (
    <>
      {jobs.map((job) => (
          <Job
            key={job.id}
            job={job}
          />
        ))}
    </>
  )
}

export default FetchJobs;