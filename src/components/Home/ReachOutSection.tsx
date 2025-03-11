import styles from "../../app/styles/page.module.css";

const ReachOutSection = () => {
    return (
        <div className={styles.reachOutSection}>
            <div className={styles.reachOutLine}></div>
            <div className={`${styles.reachOutContent} container`}>
                <div className={styles.reachOutText}>
                    <h5>Reach out to our team at CGD, and we'll help you protect your digital future</h5>
                    <div className={styles.reachOutBtns}>
                        <input type="text" name="email" id="email" placeholder="Email Address" />
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReachOutSection;