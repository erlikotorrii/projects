import styles from "../app/styles/page.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* Top section */}
            <div className={`${styles.footerSection} container`}>
                <div className={styles.firstPart}>
                    <div className={styles.logoFooter}>
                        <img src="/logo.svg" alt="Cyberware Global Defence Logo" />
                    </div>
                    <div className={styles.certifications}>
                        <img src="/certification1.svg" alt="Certifications" />
                        <img src="/certification2.svg" alt="Certifications" />
                    </div>
                    <div className={styles.partners}>
                        <img src="/partners.svg" alt="Partnering Organizations" />
                    </div>
                </div>

                <div className={styles.secondPart}>
                    <div className={styles.servicesFooter}>
                        <h4>Services</h4>
                        <ul>
                            <li>SIEM - 24/7 Threat Monitoring</li>
                            <li>Penetration Testing</li>
                            <li>Incident Management</li>
                            <li>Compliance & Risk Management</li>
                            <li>Security Awareness Training</li>
                        </ul>
                    </div>
                    <div className={styles.aboutUsFooter}>
                        <h4>About Us</h4>
                        <ul>
                            <li>Mission Statement</li>
                            <li>Our Story</li>
                            <li>Our Expertise</li>
                            <li>Partnerships</li>
                        </ul>
                        <h4>Our Values</h4>
                        <ul>
                            <li>Innovation</li>
                            <li>Trust</li>
                            <li>Excellence</li>
                            <li>Collaboration</li>
                        </ul>
                    </div>
                    <div className={styles.teamFooter}>
                        <h4>Team</h4>
                        <ul>
                            <li>Co-Founder & CXX</li>
                            <li>Cybersecurity Specialists</li>
                            <li>Security Awarneness Advisors</li>
                        </ul>
                        <h4>Industries We Serve</h4>
                        <ul>
                            <li>Finance</li>
                            <li>Healthcare</li>
                            <li>Government</li>
                            <li>Retail</li>
                            <li>eGame</li>
                            <li>Education</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.thirdPart}>
                    <div className={styles.contactFooter}>
                        <h2>Contact <span>Us</span></h2>
                        <form>
                            <input type="text" id="name" placeholder="Name" />
                            <input type="text" id="email" placeholder="Email" />
                            <textarea name="message" id="message" placeholder="Message" ></textarea>
                            <p><input type="checkbox" /> I would like to recieve the newsletter</p>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>

                <div className={styles.forthPart}>
                    <div className={styles.map}>
                        <img src="/map.svg" alt="Map" />
                    </div>
                    <div className={styles.locationFooter}>
                        <ul>
                            <li>
                                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 7C5.87813 7 6.20194 6.8726 6.47144 6.6178C6.74094 6.363 6.87546 6.05707 6.875 5.7C6.875 5.3425 6.74025 5.03635 6.47075 4.78155C6.20125 4.52675 5.87767 4.39957 5.5 4.4C5.12187 4.4 4.79806 4.5274 4.52856 4.7822C4.25906 5.037 4.12454 5.34293 4.125 5.7C4.125 6.0575 4.25975 6.36365 4.52925 6.61845C4.79875 6.87325 5.12233 7.00043 5.5 7ZM5.5 13.5C3.65521 12.0158 2.27746 10.6374 1.36675 9.3647C0.456042 8.092 0.000458333 6.91377 0 5.83C0 4.205 0.552979 2.91042 1.65894 1.94625C2.7649 0.982083 4.04525 0.5 5.5 0.5C6.95521 0.5 8.23579 0.982083 9.34175 1.94625C10.4477 2.91042 11.0005 4.205 11 5.83C11 6.91333 10.5444 8.09157 9.63325 9.3647C8.72208 10.6378 7.34433 12.0163 5.5 13.5Z" fill="white" />
                                </svg>
                                Berlin, Germany
                            </li>
                            <li>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8813 11.5C9.45143 11.5 8.10625 11.2296 6.84576 10.6888C5.58528 10.1479 4.48538 9.40762 3.54606 8.46785C2.60674 7.52845 1.86431 6.42845 1.31876 5.16785C0.773208 3.90725 0.500615 2.55773 0.500982 1.1193C0.491816 0.9543 0.546811 0.809833 0.665967 0.6859C0.785123 0.561967 0.931777 0.5 1.10593 0.5H3.25074C3.41572 0.5 3.55779 0.561967 3.67695 0.6859C3.7961 0.809833 3.85568 0.9587 3.85568 1.1325C3.85568 1.53583 3.88318 1.91625 3.93817 2.27375C3.99317 2.63125 4.08025 2.97042 4.1994 3.29125C4.24523 3.39208 4.2544 3.49512 4.2269 3.60035C4.1994 3.70558 4.14441 3.80422 4.06191 3.89625L2.68704 5.27125C3.08117 6.07792 3.64028 6.84333 4.36439 7.5675C5.08849 8.29167 5.86759 8.86917 6.70168 9.3L8.07655 7.925C8.15905 7.8425 8.25529 7.7875 8.36528 7.76C8.47527 7.7325 8.58526 7.74167 8.69525 7.7875C9.03439 7.8975 9.38507 7.98238 9.7473 8.04215C10.1095 8.10192 10.483 8.13162 10.8676 8.13125C11.0417 8.13125 11.1907 8.19542 11.3147 8.32375C11.4386 8.45208 11.5004 8.60792 11.5 8.79125V10.895C11.5 11.06 11.4404 11.2021 11.3213 11.3212C11.2021 11.4404 11.0555 11.5 10.8813 11.5ZM7.71909 9.85C8.13155 10.0058 8.56235 10.1296 9.01147 10.2212C9.4606 10.3129 9.92347 10.3725 10.4001 10.4V9.2175C10.116 9.19917 9.82485 9.16708 9.52678 9.12125C9.2287 9.07542 8.93319 9.00667 8.64025 8.915L7.71909 9.85ZM10.4001 6C10.4001 4.77167 9.97388 3.73125 9.12146 2.87875C8.26904 2.02625 7.22871 1.6 6.00049 1.6V0.5C6.76126 0.5 7.47619 0.644467 8.1453 0.9334C8.81441 1.22233 9.39644 1.61412 9.89139 2.10875C10.3863 2.60375 10.7783 3.18583 11.0672 3.855C11.3561 4.52417 11.5004 5.23917 11.5 6H10.4001ZM8.20029 6C8.20029 5.395 7.9849 4.87708 7.5541 4.44625C7.12331 4.01542 6.60544 3.8 6.00049 3.8V2.7C6.91708 2.7 7.69617 3.02083 8.33778 3.6625C8.97939 4.30417 9.3002 5.08333 9.3002 6H8.20029ZM2.15083 4.25375L3.05825 3.3325C2.98493 3.06667 2.92297 2.78708 2.87237 2.49375C2.82177 2.20042 2.78749 1.9025 2.76953 1.6H1.61463C1.63296 2.04 1.68796 2.48 1.77962 2.92C1.87128 3.36 1.99502 3.80458 2.15083 4.25375Z" fill="white" />
                                </svg>
                                000111222333
                            </li>
                            <li>
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 1.7001C11.5 1.0951 11.005 0.600098 10.4 0.600098H1.6C0.995 0.600098 0.5 1.0951 0.5 1.7001V8.3001C0.5 8.9051 0.995 9.4001 1.6 9.4001H10.4C11.005 9.4001 11.5 8.9051 11.5 8.3001V1.7001ZM10.4 1.7001L6 4.4501L1.6 1.7001H10.4ZM10.4 8.3001H1.6V2.8001L6 5.5501L10.4 2.8001V8.3001Z" fill="white" />
                                </svg>
                                info@cybergd.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom section */}
            <div className={styles.footerBottom}>
                <div className={`${styles.footerBottomSection} container`}>
                    <div className={styles.leftSideFooter}>
                        <ul>
                            <li>Legal Notice</li>
                            <li>Data Protection</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>
                    <div className={styles.rightSideFooter}>
                        <p><b>&copy; Cyberware Global Defence</b></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;