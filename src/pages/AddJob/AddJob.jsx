import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const AddJob = () => {
    const {user} = useAuth();
    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData)
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const { min, max, currency, ...newJob } = initialData;
        console.log(newJob);
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)

        fetch('http://localhost:3000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications')
                }
            })

    }

    return (
        <div className='w-8/12 mx-auto'>
            <h1 className='text-2xl text-center font-semibold'>Add NEW Job</h1>
            <form onSubmit={handleAddJob} className="card-body">
                {/* Job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* Job Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" placeholder="Job Location" className="input input-bordered" required />

                </div>
                {/* Job Type */}
                <div className='grid lg:grid-cols-2'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Type</span>
                        </label>
                        <select defaultValue={'Pick a Job Type'} className="select  select-ghost w-3/4">
                            <option disabled >Pick a Job Type</option>
                            <option>Full-Time</option>
                            <option>Intern</option>
                            <option>Part-Time</option>
                        </select>

                    </div>
                    {/* Job category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Category</span>
                        </label>
                        <select defaultValue={'Pick a Job Type'} className="select  select-ghost w-3/4  ">
                            <option disabled >Pick a Job Type</option>
                            <option>Engineering </option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Tech</option>
                            <option>Teaching</option>
                        </select>

                    </div>
                </div>
                {/* Salary Range*/}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name='min' placeholder="min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <input type="text" name='max' placeholder="max" className="input input-bordered" required />
                    </div>
                    <div className="form-control">

                        <select defaultValue={'Currency'} name='currency' className="select   select-ghost">
                            <option disabled >Currency</option>
                            <option>BDT </option>
                            <option>USD</option>
                            <option>IRN</option>
                            
                        </select>

                    </div>
                </div>

                {/* Job Description*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Bio" name='description'></textarea>
                </div>
                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company</span>
                    </label>
                    <input type="text" name='company' placeholder="company name" className="input input-bordered" required />
                </div>
                {/* Job Requirements*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Requirements" name='requirements'></textarea>
                </div>
                {/* Job Responsibilities*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='responsibilities' placeholder="Responsibilities"></textarea>
                </div>
                {/* HR Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input defaultValue={user.name} type="text" name='name' placeholder="hr name" className="input input-bordered" required />
                </div>
                {/* HR email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input defaultValue={user.email} type="email" name='email' placeholder="hr email" className="input input-bordered" required />
                </div>
                {/*application Deadline*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input defaultValue={user.email} type="date" name='deadline' placeholder="application 
                    deadline" className="input input-bordered" required />
                </div>
                {/* company logo url */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo Url</span>
                    </label>
                    <input type="url" name='company_logo' placeholder="logo url" className="input input-bordered" required />
                </div>

                {/* submit button*/}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Job</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;