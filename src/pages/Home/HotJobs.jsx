import React, { useEffect, useState } from 'react';
import HotJobCart from './HotJobCart';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [])


    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4'>
                {
                    jobs.map(job => <HotJobCart key={job._id} job={job}></HotJobCart>)
                }
            </div>
        </div>
    );
};

export default HotJobs;