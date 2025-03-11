import styles from "../../app/styles/contact.module.css";

const ContactFormSection = () => {
    return (
        <div className={styles.contactFormSection}>
            <div className={`${styles.contactFormContent} container`}>
                <div className={`${styles.contact} row`}>
                    <div className={`${styles.contactText} col`}>
                        <h1>Contact us.</h1>
                        <h6>We are here to help you secure your future</h6>
                        <div className={styles.contactInfo}>
                            <p>Email: info@cyberg.com</p>
                            <p>Phone: +49 123 456 789</p>
                            <p>Address: Street, Berlin Germany</p>
                        </div>
                        <div className={styles.contactQuestion}>
                            <h3>What happens next?</h3>
                            <p><span>1</span> We'll review your cybersecurity needs.</p>
                            <p><span>2</span> You'll receive a customized security proposal.</p>
                            <p><span>3</span> Once approved, we'll implement the solutions and support you.</p>
                        </div>
                    </div>
                    <div className={`${styles.contactForm} col`}>
                        <div className={styles.contactName}>
                            <p>Full name</p>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className={styles.contactEmail}>
                            <p>Email address</p>
                            <input type="email" placeholder="Your email address" />
                        </div>
                        <div className={styles.contactPhone}>
                            <p>Telephone number</p>
                            <input type="text" placeholder="Your phone number" />
                        </div>
                        <div className={styles.contactCountry}>
                            <p>Select your country</p>
                            <select name="country" id="country">
                                <option value="select">Your country</option>
                                <option value="al">Albania</option>
                                <option value="en">England</option>
                                <option value="mk">Macedonia</option>
                                <option value="de">Germany</option>
                            </select>
                        </div>
                        <div className={styles.contactMessage}>
                            <p>Send us a Message</p>
                            <textarea name="message" id="message" placeholder="Your message" ></textarea>
                        </div>
                        <div className={styles.contactBtn}>
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFormSection;