import styles from "../../app/styles/service1.module.css"

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={`${styles.heroSectionContent} container`}>
                <h1><span>Network</span> Security</h1>
                <p>"We offer end-to-end network security solutions, optimizing your infrastructure while securing it against unauthorized access."</p>
                <button>Get a Demo</button>
            </div>
        </div>
    )
}

export default HeroSection;
