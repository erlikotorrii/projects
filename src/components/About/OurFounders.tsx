"use client";

import { useState } from "react";
import styles from "../../app/styles/about.module.css";

type Founder = {
    name: string;
    title: string;
    image: string;
    shortBio: string;
    fullBio: string;
};

const OurFounders = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState<Founder>({
        name: "",
        title: "",
        image: "",
        shortBio: "",
        fullBio: ""
    });

    const leaders: Founder[] = [
        {
            name: "Furkan Bajrami",
            title: "-",
            image: "/homeImages/person1.png",
            shortBio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            fullBio: "Furkan Bajrami is a cyber security expert with over a decade of experience in safeguarding organizations from digital threats. He holds a Master's degree in Cyber Security from Stanford University and certifications such as Certified Information Systems Security Professional (CISSP) and Certified Ethical Hacker (CEH). John has collaborated with Fortune 500 companies to develop robust security frameworks and incident response strategies, specializing in network security and risk management. Passionate about education, Furkan frequently speaks at industry conferences and conducts workshops to raise awareness about cyber threats and best practices for online safety. As an active member of several professional organizations, he contributes to research initiatives aimed at advancing the field, believing that effective cyber defense relies on empowering individuals and organizations to take proactive measures against potential threats."
        },
        {
            name: "Petar Ninovski",
            title: "Co-Founder & CXX",
            image: "/homeImages/person2.png",
            shortBio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            fullBio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam assumenda, maxime illo quisquam dolor amet nam fugit eos aliquam ipsum accusantium facere fuga nulla explicabo earum soluta quasi culpa exercitationem. Animi dolore ipsa hic illum cumque esse modi sint natus nobis, laborum quasi nihil quas, explicabo laudantium tempora reiciendis deleniti quis neque iste consectetur exercitationem dolorum. Excepturi blanditiis laboriosam, odit praesentium eos facilis odio quam incidunt corporis optio veritatis accusamus? Dolores libero exercitationem quidem cum saepe minus ipsam nobis, earum voluptate totam. Tempora placeat enim amet? Hic aut alias sed eos quae magnam ratione, aliquam, accusantium eum omnis eius?"
        }
    ];

    const openModal = (leader: Founder) => {
        setModalData({
            name: leader.name,
            title: leader.title,
            image: leader.image,
            shortBio: leader.shortBio,
            fullBio: leader.fullBio
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.ourFoundersSection}>
            <div className={`${styles.ourFoundersContent} container`}>
                <div className="text-center">
                    <h2>Our Founders</h2>
                    <h5>Here's a glimpse into the expertise driving CGD's security solutions:</h5>
                </div>
                <div>
                    <div className={styles.founderCardsDiv}>
                        {leaders.map((founder, index) => (
                            <div key={index} className="">
                                <div className={styles.founderCard}>
                                    <img src={founder.image} alt={founder.name} />
                                    <div className={styles.founderCardText}>
                                        <h5>{founder.name}</h5>
                                        <p>{founder.title}</p>
                                        <p>{founder.shortBio}</p>
                                        <button onClick={() => openModal(founder)} className={styles.modalButton}>
                                            <svg width="66" height="64" viewBox="0 0 66 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <ellipse cx="33" cy="32" rx="33" ry="32" fill="#FF6F0F" />
                                                <path d="M40.6529 33.8334H18.332V30.1667H40.6529L30.3862 19.9L32.9987 17.3334L47.6654 32L32.9987 46.6667L30.3862 44.1L40.6529 33.8334Z" fill="white" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {isModalOpen && (
                        <div className={styles.modal} onClick={closeModal}>
                            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                                <button className={styles.closeButton} onClick={closeModal}>X</button>
                                <div className={styles.modalBody}>
                                    <div className="row">
                                        <div className="col">
                                            <img src={modalData.image} alt={modalData.name} className={styles.modalImage} />
                                        </div>
                                        <div className="col">
                                            <h2>{modalData.name}</h2>
                                            <p>{modalData.fullBio}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default OurFounders;