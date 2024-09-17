/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import Button from './Button';

const ShowJobCard = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  const maxLength = 150;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;

    let truncated = text.slice(0, maxLength);

    const lastSpace = truncated.lastIndexOf(" ");

    if (lastSpace !== -1) {
      truncated = truncated.slice(0, lastSpace);
    }

    return truncated.trim() + "...";
  };


  const displayedText = isExpanded ? job.description : truncateText(job.description, maxLength);


  return (
    <div className=" dark:bg-main-dark dark:bg-opacity-20 dark:shadow-2xl  w-full px-2 sm:px-4 md:px-10 py-2 sm:py-11 mb-6 sm:mb-8 mx-auto rounded-lg shadow-md bg-gray-100 border border-main border-opacity-30 lg:px-24">
      <h2 className="  dark:text-accent font-bold mb-2 sm:mb-4 text-center p-1 sm:p-2 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg text-main text-sm sm:text-xl md:text-3xl lg:text-4xl break-words">
        {job.title}
      </h2>
      
      <h3 className=" dark:text-white ps-2 sm:ps-4 rounded-md text-xs lg:text-xl sm:text-sm md:text-base p-1">Description :</h3>

      <p className="dark:text-white mb-2 sm:mb-4 p-2 sm:p-4 rounded-md  break-words lg:text-xl sm:text-sm md:text-base ">
        {displayedText}
        {job.description.length > maxLength && (
          <h6
            onClick={toggleShowMore}
            className="dark:text-white text-main cursor-pointer mt-2  font-semibold text-decoration-line: underline"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </h6>
        )}
      </p>
     
      <div className="flex flex-col mb-1">
        <h3 className=" dark:text-white mb-2 font-semibold p-1 ps-2 sm:ps-4 rounded-md text-main text-xs sm:text-sm md:text-base lg:text-2xl">
          Category : {job.category}
        </h3>
        <div className="flex flex-col ps-2 sm:ps-3 sm:flex-row sm:justify-between items-start sm:items-center lg:text-xl sm:text-sm md:text-base p-1 sm:p-2">
          <div className="mb-1 sm:mb-0 flex flex-wrap items-center">
            {job.service.map((service, index) => (
              <span
                key={index}
                className="bg-main text-white p-2 rounded-full text-xs mr-1 mb-1"
              >
                {service}
              </span>
            ))}
          </div>
          <div className="my-2 sm:my-0">
            <Button
              to="/job-details-for-apply" 
              text="More Details"
              variant="fill"
              size="sm"
              className="mx-2 rounded-full"
            />
          </div>
          <div className="flex items-center mt-1 sm:mt-0">
            <MapPin className="dark:text-white text-main lg:text-xl sm:text-sm md:text-base"  />
            <span className="dark:text-white ml-1 lg:text-xl sm:text-sm md:text-base">{job.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowJobCard;
