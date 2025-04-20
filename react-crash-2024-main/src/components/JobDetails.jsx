import React from "react";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobDetails = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = job.jobDescription;
  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <div className="bg-white rounded-m shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className=" font-bold flex flex-row items-center ">
            <h3>ID: </h3>
            <div className="text-gray-600 my-2 font-normal">{job.id}</div>
          </div>
          <div className="  font-bold flex flex-row items-center mb-2">
            <h3>Title: </h3>
            <h3 className="text-m font-normal">{job.jobTitle}</h3>
          </div>
          <div className=" font-bold flex flex-col items-start ">
            <h3>Comany Name: </h3>
            <h3 className="text-m font-normal">{job.companyName}</h3>
          </div>
          <div className="flex flex-row items-center mb-2 font-bold">
            <h3>Logo: </h3>
            <img
              className="h-10 w-10 object-contain text-m  font-normal "
              src={job.companyLogo}
            />
          </div>
          <div className="flex flex-row items-center mb-2 font-bold">
            <h3>Job Industry: </h3>
            <h3 className="text-m  font-normal">{job.jobIndustry}</h3>
          </div>
          <div className="flex flex-row items-center mb-2 font-bold">
            <h3>Job Type: </h3>
            <h3 className="text-m  font-normal">{job.jobType}</h3>
          </div>

          <div className="flex flex-row items-center mb-5 font-bold">
            <h3>Job Level: </h3>
            <h3 className="text-m  font-normal">{job.jobLevel}</h3>
          </div>
          <div className="flex flex-col gap-2 items-start mb-5 font-bold">
            <h3>Excerpt: </h3>
            <h3 className="text-m  font-normal">{job.jobExcerpt}</h3>
          </div>
          <div className="flex flex-row items-center mb-2 font-bold">
            <h3>public Date: </h3>
            <h3 className="text-m  font-normal">{job.pubDate}</h3>
          </div>
          <div className="flex flex-row items-center mb-2 font-bold">
            <h3>public Date: </h3>
            <h3 className="text-m  font-normal">{job.pubDate}</h3>
          </div>
          <div className="flex flex-row items-center mb-2 font-bold">
            <h3>Min Salary: </h3>
            <h3 className="text-m  font-normal">{job.annualSalaryMin}</h3>
          </div>
          <div className="flex flex-row items-center mb-2 font-bold">
            <h3>Max Salary: </h3>
            <h3 className="text-m  font-normal">{job.annualSalaryMax}</h3>
          </div>
          <div className="flex flex-row items-center mb-2 font-bold">
            <h3>Currency: </h3>
            <h3 className="text-m  font-normal">{job.salaryCurrency}</h3>
          </div>
        </div>
        <div className="flex flex-row items-center mb-2 font-bold">
          <h3>Description: </h3>
          <div className="mb-5  font-normal">{description}</div>
        </div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {job.jobGeo}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
