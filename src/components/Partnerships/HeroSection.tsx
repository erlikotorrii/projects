import styles from "../../app/styles/partnerships.module.css";

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>    
            <div className={`${styles.heroContent} container`}>
                <h1>Meet Our <span>Partners </span>& <span>Collaborations</span></h1>
                <p>At Cyberware Global Defense, we are proud to collaborate with the following industry leaders and organizations to provide the best cybersecurity solutions to our clients:</p>
            </div>
        </div>
    )
}

export default HeroSection;