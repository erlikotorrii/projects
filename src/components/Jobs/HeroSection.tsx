import styles from "../../app/styles/jobs.module.css";

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={`${styles.heroContent} container`}>
                <h2><span>Join Our Team </span>of Cybersecurity Innovator</h2>
                <h6>Protecting the Digital World, One Threat at a Time</h6>
            </div>
        </div>
    )
}

export default HeroSection;