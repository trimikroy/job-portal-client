import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const { _id, title, company, applicationDeadline, jobType, salaryRange, category, } = useLoaderData();

    return (
        <div className="card bg-base-100 w-96 border-2 hover:bg-slate-100 ">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p><span className='font-semibold'>Company :</span> {company}</p>
                <p><span className='font-semibold'>Deadline :</span> {applicationDeadline}</p>
                <p><span className='font-semibold'>JobType :</span> {jobType}</p>
                <p><span className='font-semibold'>Category :</span> {category}</p>
                <p><span className='font-semibold'>SalaryRange :</span> {salaryRange.min}- {salaryRange.max}</p>

               

                
                

                <div className="card-actions justify-start">
                    <Link to={`/jobApply/${_id}`}><button className="btn btn-accent">Apply Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;