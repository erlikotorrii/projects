"use client";

import Link from "next/link";
import styles from "../../app/styles/page.module.css";
import { useState } from "react";

type Leader = {
    name: string;
    title: string;
    image: string;
    shortBio: string;
    fullBio: string;
};

const LeadershipSection = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState<Leader>({
        name: "",
        title: "",
        image: "",
        shortBio: "",
        fullBio: ""
    });

    const leaders: Leader[] = [
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
        },
        {
            name: "Lena Muller",
            title: "Chief Technology Officer (CTO)",
            image: "/homeImages/person3.png",
            shortBio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            fullBio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus quaerat eveniet ipsam explicabo quam cum rerum, saepe amet adipisci laudantium quia voluptatibus tenetur quod mollitia ea ipsa omnis! Unde maxime enim libero fugiat in dicta id omnis quo et, nisi provident suscipit blanditiis, facilis ducimus nobis voluptate eum, consequatur inventore qui. Voluptates atque iste modi recusandae nulla dolorum vitae explicabo assumenda rem neque exercitationem culpa, sequi error fugiat voluptas et! Voluptate aliquam enim recusandae voluptas fuga ut id tenetur commodi fugiat dolor dolorem, placeat tempora sed expedita deserunt a! Consequuntur est recusandae numquam non sit. Ducimus at eius voluptatem."
        }
    ];

    const openModal = (leader: Leader) => {
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
        <div className={styles.leadershipSection}>
            <div className={` ${styles.leadershipTeam} container py-4`}>
                <div className={`${styles.leadershipText}`}>
                    <h2>Our leadership team</h2>
                    <p>Meet the leader behind CGD's mission to protect businesses from evolving cyber threats. With deep expertise in cybersecutiry and IT consulting, our leadership team drives innovation and ensures the highest standards of security for our clients. Scroll down to see the faces behind our success.</p>
                </div>
                <div>
                    <div className="row"> 
                        {leaders.map((leader, index) => (
                            <div key={index} className="col">
                                <div className={styles.leaderCard}>
                                    <img src={leader.image} alt={leader.name} />
                                    <div className={styles.leaderCardText}>
                                        <h5>{leader.name}</h5>
                                        <p>{leader.title}</p>
                                        <p>{leader.shortBio}</p>
                                        <button onClick={() => openModal(leader)} className={styles.modalButton}>
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
    );
}

export default LeadershipSection;