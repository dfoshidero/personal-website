import React from 'react';

import './Education.scss';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const educations = [
	{
		id: 5,
		title: "Master of Science (M.Sc) // Computer Science",
		location: "Bath, United Kingdom",
		school: "University of Bath",
		graduation: "Expected 2024.",
		achieved: "",
		type: "degree",
		// More details can be added here if needed
	},
	{
		id: 4,
		title: "Bachelor of Science with Honours (B.Sc Hons) // Architecture",
		location: "Bath, United Kingdom",
		school: "University of Bath",
		graduation: "Graduated 2023.",
		achieved: "2:1",
		type: "degree",
		// More details can be added here if needed
	},
	{
		id: 3,
		title: "Udemy // Complete 2023 Web Development Bootcamp",
		graduation: "Issued Oct 2023",
		link: "https://www.udemy.com/certificate/UC-f3a9d97a-913d-453e-b471-ed31b2479a4e/",
	},
	{
		id: 2,
		title: "Amazon Web Services (AWS) // Certified Cloud Practitioner",
		graduation: "Issued Jul 2023",
		link: "https://www.credly.com/badges/4c769782-1735-4aae-b652-1413a1e65b75/linked_in_profile",
	},
	{
		id: 1,
		title: "Advanced-Level Qualifications // Art, Physcs, Maths",
		location: "London, United Kingdom",
		school: "Harlington School",
		graduation: "Graduated 2019.",
		achieved: "A*, A, A",
		// More details can be added here if needed
	},
];

export default function EducationCard() {
  return (
    <div className="education-container">
      <ul className="education-list">
        {educations.map(ed => (
          <li key={ed.id} className={`education-item ${ed.type === 'degree' ? 'degree-item' : ''}`}>
            <div className="education-title">{ed.title}</div>
            <div className="graduation-and-button">
              <div className="education-grad">
                {ed.graduation} <span>{ed.achieved}</span>
              </div>
              {ed.link && 
                <button className="certification-button">
                  <a href={ed.link} target="_blank" rel="noopener noreferrer">
                    <span className="button-content">View <ArrowOutwardIcon fontSize="inherit" className="button-icon" /></span>
                  </a>
                </button>
              }
            </div>
            {ed.school && ed.location && 
              <div className="education-location">{ed.school} | {ed.location}</div>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}
