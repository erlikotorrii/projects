"use client";

import { useState } from "react";
import styles from "../../app/styles/about.module.css";
import Link from "next/link";

type Advisors = {
    name: string;
    image: string;
    shortBio: string;
    fullBio: string;
};

const AdvisorsSection = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState<Advisors>({
        name: "",
        image: "",
        shortBio: "",
        fullBio: ""
    });

    const leaders: Advisors[] = [
        {
            name: "Emily Johnson",
            image: "/aboutImages/person4.svg",
            shortBio: "Emily simplifies cybersecurity for employees through workshops, teaching best practices for staying safe online.",
            fullBio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a doloribus culpa cupiditate consequuntur explicabo voluptate nulla et eius velit ullam architecto, eaque quis non recusandae vero, assumenda fuga quo mollitia cumque, maiores inventore placeat! Quisquam vero qui sit tempore sapiente ipsam architecto veniam deserunt ratione nostrum sint quae quaerat fugit accusamus nobis est, porro nesciunt voluptate dolores consequuntur atque reprehenderit dolorum numquam? Accusamus in, ad suscipit vitae harum tempore magni assumenda et, odit quis ducimus voluptatum? Voluptatibus recusandae consectetur animi suscipit ratione iusto quos impedit quas aperiam ipsa provident expedita, corporis rem quidem accusamus. Architecto dolorum ut dignissimos dolore."
        },
        {
            name: "Hannah Weber",
            image: "/aboutImages/person5.svg",
            shortBio: "Hannah creates engaing security campaigns, making sybersecurity easy to understand and apply across teams.",
            fullBio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam assumenda, maxime illo quisquam dolor amet nam fugit eos aliquam ipsum accusantium facere fuga nulla explicabo earum soluta quasi culpa exercitationem. Animi dolore ipsa hic illum cumque esse modi sint natus nobis, laborum quasi nihil quas, explicabo laudantium tempora reiciendis deleniti quis neque iste consectetur exercitationem dolorum. Excepturi blanditiis laboriosam, odit praesentium eos facilis odio quam incidunt corporis optio veritatis accusamus? Dolores libero exercitationem quidem cum saepe minus ipsam nobis, earum voluptate totam. Tempora placeat enim amet? Hic aut alias sed eos quae magnam ratione, aliquam, accusantium eum omnis eius?"
        },
        {
            name: "James Fischer",
            image: "/aboutImages/person6.svg",
            shortBio: "James focuses on incident monitoring and response, using data analytics to keep systems secure from potential attacks.",
            fullBio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam assumenda, maxime illo quisquam dolor amet nam fugit eos aliquam ipsum accusantium facere fuga nulla explicabo earum soluta quasi culpa exercitationem. Animi dolore ipsa hic illum cumque esse modi sint natus nobis, laborum quasi nihil quas, explicabo laudantium tempora reiciendis deleniti quis neque iste consectetur exercitationem dolorum. Excepturi blanditiis laboriosam, odit praesentium eos facilis odio quam incidunt corporis optio veritatis accusamus? Dolores libero exercitationem quidem cum saepe minus ipsam nobis, earum voluptate totam. Tempora placeat enim amet? Hic aut alias sed eos quae magnam ratione, aliquam, accusantium eum omnis eius?"
        }
    ];

    const openModal = (specialist: Advisors) => {
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
        <div className={styles.advisorsSection}>
            <div className={`${styles.advisorsContent} container`}>
                <h2 className="text-center">Security Awareness Advisors</h2>

                <div>
                    <div className={styles.advisorCardsDiv}>
                        {leaders.map((advisor, index) => (
                            <div key={index} className="">
                                <div className={styles.advisorCard}>
                                    <img src={advisor.image} alt={advisor.name} />
                                    <div className={styles.advisorCardText}>
                                        <h5>{advisor.name}</h5>
                                        <p>{advisor.shortBio}</p>
                                        <button onClick={() => openModal(advisor)} className={styles.modalButton}>
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

export default AdvisorsSection;