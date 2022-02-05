import React from 'react';
import Job from './Job';
 
const FetchJobs = ( { jobs }) => {

  const data = Array.from(jobs)

  return (
    <>
      {data.map((job) => (
          <Job
            key={job.id}
            job={job}
          />
        ))}
    </>
  )
}

export default FetchJobs;