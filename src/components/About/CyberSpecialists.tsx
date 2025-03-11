"use client";

import { useState } from "react";
import styles from "../../app/styles/about.module.css";
import Link from "next/link";

type Specialists = {
    name: string;
    image: string;
    shortBio: string;
    fullBio: string;
};

const CyberSpecialists = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState<Specialists>({
        name: "",
        image: "",
        shortBio: "",
        fullBio: ""
    });

    const leaders: Specialists[] = [
        {
            name: "Lukas Schmidt",
            image: "/aboutImages/person1.svg",
            shortBio: "Lukas excels in threat detection and network security, identifying vulnerabilities to protect systems from cyber risks.",
            fullBio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum, expedita repudiandae minima consectetur repellendus nulla dolorum similique obcaecati tempora. Voluptate, provident sint placeat dolores quisquam eos beatae corporis tempore ducimus voluptatem omnis ullam. Recusandae sapiente id asperiores. Consequuntur deserunt, veniam officia sint magnam distinctio quam minima quae natus quas quod libero eius nobis ducimus, ex totam debitis aliquam tenetur. Doloribus saepe, nobis optio blanditiis quibusdam autem maiores dolores possimus quos magnam illum mollitia omnis doloremque nulla dolore dicta dolor adipisci corrupti nisi quae eos reprehenderit fugiat neque! Perspiciatis tenetur consectetur natus nobis quia, deleniti amet! Id reprehenderit fugit cumque."
        },
        {
            name: "Emma Brown",
            image: "/aboutImages/person2.svg",
            shortBio: "Emma designs training programs to boost employee cybersecurity awareness and help organizations stay secure.",
            fullBio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam assumenda, maxime illo quisquam dolor amet nam fugit eos aliquam ipsum accusantium facere fuga nulla explicabo earum soluta quasi culpa exercitationem. Animi dolore ipsa hic illum cumque esse modi sint natus nobis, laborum quasi nihil quas, explicabo laudantium tempora reiciendis deleniti quis neque iste consectetur exercitationem dolorum. Excepturi blanditiis laboriosam, odit praesentium eos facilis odio quam incidunt corporis optio veritatis accusamus? Dolores libero exercitationem quidem cum saepe minus ipsam nobis, earum voluptate totam. Tempora placeat enim amet? Hic aut alias sed eos quae magnam ratione, aliquam, accusantium eum omnis eius?"
        },
        {
            name: "Karl Muller",
            image: "/aboutImages/person3.svg",
            shortBio: "Karl specializes in penetration testing and incident response, helping businesses safeguard against evolving threats.",
            fullBio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam assumenda, maxime illo quisquam dolor amet nam fugit eos aliquam ipsum accusantium facere fuga nulla explicabo earum soluta quasi culpa exercitationem. Animi dolore ipsa hic illum cumque esse modi sint natus nobis, laborum quasi nihil quas, explicabo laudantium tempora reiciendis deleniti quis neque iste consectetur exercitationem dolorum. Excepturi blanditiis laboriosam, odit praesentium eos facilis odio quam incidunt corporis optio veritatis accusamus? Dolores libero exercitationem quidem cum saepe minus ipsam nobis, earum voluptate totam. Tempora placeat enim amet? Hic aut alias sed eos quae magnam ratione, aliquam, accusantium eum omnis eius?"
        }
    ];

    const openModal = (specialist: Specialists) => {
        setModalData({
            name: specialist.name,
            image: specialist.image,
            shortBio: specialist.shortBio,
            fullBio: specialist.fullBio
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.cyberSpecialistsSection}>
            <div className={`${styles.cyberSpecialistsContent} container`}>
                <h2 className="text-center">Cybersecurity Specialists</h2>

                <div>
                    <div className={styles.specialistCardsDiv}>
                        {leaders.map((specialist, index) => (
                            <div key={index} className="">
                                <div className={styles.specialistCard}>
                                    <img src={specialist.image} alt={specialist.name} />
                                    <div className={styles.specialistCardText}>
                                        <h5>{specialist.name}</h5>
                                        <p>{specialist.shortBio}</p>
                                        <button onClick={() => openModal(specialist)} className={styles.modalButton}>
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
                <Link href="/about" type="button">Meet the rest of the team</Link>
            </div>
        </div>
    )
}

export default CyberSpecialists;