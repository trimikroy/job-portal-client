import React from 'react';
import { useParams } from 'react-router-dom';
import jobApplyLottie from '../../assets/lottie/applyJob.json'
import Lottie from 'lottie-react';
import { RiLayoutTop2Line } from 'react-icons/ri';

const JobApply = () => {
     const {id} =useParams();
     console.log(id);

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.github.value;
       console.log(linkedin, github, resume)
    }
     
    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                   <Lottie className='w-[300px]' animationData={jobApplyLottie}> </Lottie>
                </div>
                <div className="w-full card bg-base-100  shrink-0 shadow-2xl">
                    <form onSubmit={submitJobApplication} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Linkedin URL</span>
                            </label>
                            <input type="url" name='linkedin' placeholder="Linkedin URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">GitHub URL</span>
                            </label>
                            <input type="url" name='github' placeholder="GitHub URL" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume URL</span>
                            </label>
                            <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Apply</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;