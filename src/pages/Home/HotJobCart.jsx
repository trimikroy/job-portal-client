import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const HotJobCart = ({ job }) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange, jobType, category } = job;
    return (
        <div className="card card-compact hover:bg-white bg-indigo-50 border border-[#89b9f4]">
            <div className='flex gap-2 m-2'>
                <figure>
                    <img
                        className='w-14'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-2xl font-bold">{company}</h4>
                    <p className='text-gray-400 flex items-center gap-1'><IoLocationOutline />
                        {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className='flex  gap-2 flex-wrap cursor-pointer'>
                    {
                        requirements.map(skill =>
                            <p className=' rounded-md font-bold text-gray-400 bg-white text-xs text-center p-1 hover:text-blue-500 hover:bg-green-200'>{skill}</p>
                        )
                    }
                </div>
                <div className="card-actions justify-end items-center gap-4">
                    <p className='flex items-center'>Salary: <FaDollarSign />
                        {salaryRange.min}- {salaryRange.max}</p>
                    <Link to={`/jobs/${_id}`} >
                        <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCart;