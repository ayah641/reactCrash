import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import JobDetails from "./JobDetails";

const JobListing = ({ ...props }) => {
  // let description = job.jobDescription;

  // if (!showFullDescription) {
  //   description = description.substring(0, 90) + "...";
  // }

  return <JobDetails {...props} />;
};
export default JobListing;
