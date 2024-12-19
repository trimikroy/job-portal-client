import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {
    const { user,_id } = useAuth()
    const [jobs, setJobs] = useState([]);

   
    useEffect(() => {
        fetch(`http://localhost:3000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])


  


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                  {
                    jobs.map(job =>   <tr key={job._id}>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src={job.company_logo}
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{job.company}</div>
                                    <div className="text-sm opacity-50">{job.location}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                           {job.title}
                            
                        </td>
                        <td>Purple</td>
                        <th>
                            <button  className="btn btn-ghost btn-xs">X</button>
                        </th>
                    </tr>)
                  }
                  
                 </tbody>  
                 
            </table>
        </div>
    );
};

export default MyApplications;