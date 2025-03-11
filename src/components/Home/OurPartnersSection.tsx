import styles from "../../app/styles/page.module.css";

const OurPartnersSection = () => {
    return (
        <div className={styles.ourPartnersSection}>
            <div className={` ${styles.partnersContent} container`}>
                <h2 className="py-4 text-center">Our Partners</h2>
                <div className={`${styles.slidePhotosRow} row`}>
                    <div className={`${styles.slidePhotosCol} col`}>
                        <img src="/homeImages/brainster-logo.svg" alt="Brainster's logo" />
                    </div>
                    <div className={`${styles.slidePhotosCol} col`}>
                        <img src="/homeImages/microsoft-logo.svg" alt="Microsoft's logo" />
                    </div>
                    <div className={`${styles.slidePhotosCol} col`}>
                        <img src="/homeImages/netflix-logo.svg" alt="Netflix's logo" />
                    </div>
                    <div className={`${styles.slidePhotosCol} col`}>
                        <img src="/homeImages/db-logo.svg" alt="DB's logo" />
                    </div>
                    <div className={`${styles.slidePhotosCol} col`}>
                        <img src="/homeImages/amazon-logo.svg" alt="Amazon's logo" />
                    </div>
                    <div className={`${styles.slidePhotosCol} col`}>
                        <img src="/homeImages/google-logo.svg" alt="Google's logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPartnersSection;