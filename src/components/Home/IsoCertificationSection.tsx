import Link from "next/link";
import styles from "../../app/styles/page.module.css";

const IsoCertificationSection = () => {
    return (
        <div className={styles.isoCertificationSection}>
            <div className={`${styles.certificationsContent} container`}>
                <h2 className="text-center py-4">ISO Certification</h2>
                <div className={`${styles.certificationsRow} row`}>
                    <div className={`${styles.certificationsLogo} col-lg-5 col-sm-12`}>
                        <img src="/homeImages/iso-certification.svg" alt="ISO Certification Logo" />
                    </div>
                    <div className={` ${styles.certificationText} col-lg-7 col-sm-12`}>
                        <h5>At <span>CYBERWARE Global Defense</span>, we are proud to be ISO certified, demonstrating our commitment to the highest standards of cybersecurity. Our certification reflects our dedication to protecting your data and ensuring robust security practices across all operations. Trust us to safeguard your digital assets with proven excellence.</h5>
                        <div className={styles.certificationsLine}></div>
                        <div className={`${styles.certificationsList} row`}>
                            <div className="col">
                                <p>ISO/IEC 27000 - Information security management systems</p>
                            </div>
                            <div className="col">
                                <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 11L2.45946 22L-1.12193e-07 19.4333L8.08108 11L-8.49458e-07 2.56667L2.45946 -1.07506e-07L13 11Z" fill="#FF6F0F" />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.certificationsLine}></div>
                        <div className={`${styles.certificationsList} row`}>
                            <div className="col">
                                <p>ISO/IEC 27000 - Information security management systems</p>
                            </div>
                            <div className="col">
                                <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 11L2.45946 22L-1.12193e-07 19.4333L8.08108 11L-8.49458e-07 2.56667L2.45946 -1.07506e-07L13 11Z" fill="#FF6F0F" />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.certificationsLine}></div>
                        <div className={`${styles.certificationsList} row`}>
                            <div className="col">
                                <p>ISO/IEC 27000 - Information security management systems</p>
                            </div>
                            <div className="col">
                                <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 11L2.45946 22L-1.12193e-07 19.4333L8.08108 11L-8.49458e-07 2.56667L2.45946 -1.07506e-07L13 11Z" fill="#FF6F0F" />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.certificationsLine}></div>
                    </div>
                </div>
                <Link href="" type="button">See all Certificates</Link>
            </div>
        </div>
    )
}

export default IsoCertificationSection;