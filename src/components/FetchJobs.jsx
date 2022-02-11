import React from 'react';
import Job from './Job';
 
const FetchJobs = ({ jobs }) => {

  return (
    <>
      { jobs ? (jobs.map((job) => (
          <Job
            key={job.id}
            job={job}
          />
        ))) : (' There are no Jobs to show! ')
      }
    </>
  )
}

export default FetchJobs;