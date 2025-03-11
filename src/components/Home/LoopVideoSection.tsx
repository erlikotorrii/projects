import Link from "next/link";
import styles from "../../app/styles/page.module.css";

const LoopVideoSection = () => {
    return (
        <div className={styles.videoSection}>
            <div className="container">
                <div className={`${styles.videoSectionContent} row`}>
                    <div className={`${styles.textVideoSection} col-12 col-md-6`}>
                        <h1>"Always On Guard: Your 24/7 Online Security Solution for Unmatched Protection"</h1>
                        <div className={styles.videoBtns}>
                            <Link className={styles.exploreServicesBtn} href="/services" type="button">Explore our Services</Link>
                            <Link className={styles.bookDemoBtn} href="/book-demo" type="button">Book a Demo</Link>
                        </div>
                    </div>
                    <div className={`${styles.videoVideoSection} col-12 col-md-6`}>
                        <img src="/homeImages/video.gif" alt="Loop video" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoopVideoSection;
