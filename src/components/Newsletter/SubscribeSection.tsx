import Link from "next/link";
import styles from "../../app/styles/newsletter.module.css";

const SubscribeSection = () => {
    return (
        <div className={styles.newsletterSection}>
            <div className={`${styles.newsletterContent} container`}>
                <div className={`${styles.newsletterRow} row`}>
                    <div className="col-lg-5 col-sm-12">
                        <h2><span>Still haven't subscribed to our Newsletter? </span>Sign up today and stay informed about online security and all the ways you can protect yourself or your business.</h2>
                    </div>
                    <div className="col-lg-7 col-sm-12">
                        <div className={styles.newsletterInput}>
                            <input type="text" name="email" id="email" placeholder="Your Email Address" />
                        </div>
                        <div className={styles.newsletterBtn}>
                            <Link href="/newsletter">Join for Free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeSection;