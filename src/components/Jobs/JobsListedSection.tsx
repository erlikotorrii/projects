"use client";

import React, { useState } from "react";
import styles from "../../app/styles/jobs.module.css";

const JobsListedSection = () => {
    const [filterTitle, setFilterTitle] = useState("");
    const [filterDate, setFilterDate] = useState("");

    const jobs = [
        {
            title: "Cybersecurity Analyst",
            date: "April, 2024",
            description:
                "Join our team as a Cybersecurity Analyst, where you will monitor and analyze security systems to identify vulnerabilities and respond to incidents.",
            type: ["Full-Time", "On-Site", "Hybrid"],
        },
        {
            title: "Security Engineer",
            date: "April, 2024",
            description:
                "We are seeking a Security Engineer to design and implement robust security solutions that protect our infrastructure and data from cyber threats.",
            type: ["Full-Time", "On-Site", "Hybrid"],
        },
        {
            title: "Penetration Tester",
            date: "5 May, 2024",
            description:
                "As a Penetration Tester, you will simulate attacks to identify and exploit vulnerabilities, providing critical insights to enhance our security posture.",
            type: ["Full-Time", "On-Site", "Hybrid"],
        },
        {
            title: "Incident Response Specialist",
            date: "10 May, 2024",
            description:
                "Join us as an Incident Response Specialist, where you will manage and respond to security incidents, conducting investigations and implementing strategies to mitigate future threats.",
            type: ["Full-Time", "On-Site", "Hybrid"],
        },
        {
            title: "Threat Intelligence Analyst",
            date: "1 June, 2024",
            description:
                "We are looking for a Threat Intelligence Analyst to gather and analyze threat data, helping us stay ahead of emerging cyber threats.",
            type: ["Full-Time", "On-Site", "Hybrid"],
        },
        {
            title: "Information Security Officer",
            date: "10 June, 2024",
            description:
                "We are seeking an Information Security Officer to lead our security initiatives, develop policies, and ensure compliance with regulations.",
            type: ["Full-Time", "On-Site", "Hybrid"],
        },
    ];

    const filteredJobs = jobs.filter((job) =>
        (filterTitle === "" || job.title.toLowerCase().includes(filterTitle.toLowerCase())) &&
        (filterDate === "" || job.date.includes(filterDate))
    );

    return (
        <div className={styles.jobsListedSection}>
            <div className={`${styles.jobsListedContent} container`}>
                <div className={`${styles.filterSection}`}>
                    <select id="filterTitle" value={filterTitle} onChange={(e) => setFilterTitle(e.target.value)}>
                        <option value="">Job Titles</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Security">Security</option>
                        <option value="Penetration">Penetration</option>
                        <option value="Incident Response">Incident Response</option>
                        <option value="Threat Intelligence">Threat Intelligence</option>
                        <option value="Information Security">Information Security</option>
                    </select>

                    <select id="filterDate" value={filterDate} onChange={(e) => setFilterDate(e.target.value)}>
                        <option value="">Posted Date</option>
                        <option value="April, 2024">April, 2024</option>
                        <option value="May, 2024">May, 2024</option>
                        <option value="June, 2024">June, 2024</option>
                    </select>
                </div>
                <div className={`${styles.jobs} row`}>
                    {filteredJobs.map((job, index) => (
                        <div key={index} className={styles.jobContent}>
                            <div className={styles.jobsText}>
                                <p className={styles.jobDate}>{job.date}</p>
                                <h3><span>{job.title.split(" ")[0]}</span> {job.title.split(" ").slice(1).join(" ")}</h3>
                                <p>{job.description}</p>
                                <div className={styles.jobType}>
                                    {job.type.map((type, idx) => (
                                        <p key={idx}>{type}</p>
                                    ))}
                                </div>
                                <button type="button">Apply</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobsListedSection;
