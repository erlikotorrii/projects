import styles from "../../app/styles/service1.module.css"

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={`${styles.heroSectionContent} container`}>
                <h1><span>Security</span> Awareness Training</h1>
                <p>"Empower your employees to recognize and respond to potential cyber threats. Our comprehensive security awareness programs equip your workforce with the knowledge they need to prevent attacks."</p>
                <button>Get a Demo</button>
            </div>
        </div>
    )
}

export default HeroSection;
