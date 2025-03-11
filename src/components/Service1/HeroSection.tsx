import styles from "../../app/styles/service1.module.css"

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={`${styles.heroSectionContent} container`}>
                <h1><span>SIEM</span> Threat Detection & Response:</h1>
                <p>"Our 24/7 monitoring services use AI-powered tools to detect and neutralize threats before they can harm your business."</p>
                <button>Get a Demo</button>
            </div>
        </div>
    )
}

export default HeroSection;
