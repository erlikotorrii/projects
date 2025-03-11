import styles from "../../app/styles/service1.module.css"

const KeyFeaturesSection = () => {
    return (
        <div className={styles.featuresSection}>
            <div className={`${styles.featuresContent} container`}>
                <div className={styles.featuresText}>
                    <h2 className="py-3">Key Features of <span>SIEM</span></h2>
                    <svg width="82" height="105" viewBox="0 0 82 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.9458 43.8149L42.8692 39.1694L43.7925 43.8149C45.4979 52.395 52.1628 59.1014 60.6905 60.8175L65.3072 61.7465L60.6905 62.6756C52.1637 64.3916 45.4979 71.0981 43.7925 79.6791L42.8692 84.3245L41.9458 79.6791C40.2405 71.099 33.5756 64.3916 25.0487 62.6756L20.4321 61.7465L25.0487 60.8175C33.5756 59.1014 40.2405 52.395 41.9458 43.8149ZM78.5821 13.5696L40.9991 3.43655L3.41614 13.5696V57.9713C3.41614 64.7358 5.07562 71.0103 8.18398 76.4282C11.2986 81.8569 15.8685 86.4435 21.6812 89.8203H21.6875L40.9991 101.039L60.3107 89.8203H60.317C66.1297 86.4435 70.6987 81.8569 73.8142 76.4282L73.8169 76.43C76.9235 71.013 78.5821 64.7385 78.5821 57.9713V13.5696ZM41.4401 0L82 10.9354V57.9713C82 65.3343 80.1776 72.192 76.7651 78.1415V78.1478C73.3589 84.0837 68.3669 89.0977 62.0179 92.786L62.0197 92.7887L40.9991 105L19.9794 92.7887L19.9812 92.786C13.6331 89.0968 8.64115 84.0837 5.2349 78.1478C1.82146 72.1993 0 65.3388 0 57.9713V10.9354L40.5599 0H41.441H41.4401ZM61.2593 25.6659L61.567 24.1174L61.8748 25.6659C62.4436 28.5265 64.6646 30.7614 67.5075 31.3337L69.0464 31.6434L67.5075 31.9531C64.6655 32.5245 62.4436 34.7603 61.8748 37.621L61.567 39.1694L61.2593 37.621C60.6905 34.7603 58.4695 32.5254 55.6266 31.9531L54.0877 31.6434L55.6266 31.3337C58.4686 30.7614 60.6905 28.5265 61.2593 25.6659ZM23.7096 22.6776L24.1713 20.3549L24.6329 22.6776C25.4861 26.9672 28.8185 30.3213 33.0815 31.1789L35.3898 31.6434L33.0815 32.108C28.8176 32.9655 25.4852 36.3197 24.6329 40.6093L24.1713 42.932L23.7096 40.6093C22.8574 36.3188 19.524 32.9655 15.261 32.108L12.9527 31.6434L15.261 31.1789C19.524 30.3204 22.8574 26.9672 23.7096 22.6776Z" fill="white" />
                    </svg>
                </div>
                <div className={`${styles.featuresCards} row`}>
                    <div className={`${styles.featuresCol} col`}>
                        <h5>Data Aggregation</h5>
                        <p>SIEM solutions collect event data from diverse sources, including user activities, endpoints, applications, and security hardware like firewalls and antivirus software.</p>
                    </div>
                    <div className={`${styles.featuresCol} col`}>
                        <h5>Event Correlation</h5>
                        <p>By correlating related events, SIEM systems can identify patterns that may indicate potential threats.</p>
                    </div>
                    <div className={`${styles.featuresCol} col`}>
                        <h5>Real-Time Monitoring</h5>
                        <p>SIEM tools provide near-real-time analysis of security alerts, enabling security teams to respond swiftly to incidents.</p>
                    </div>
                    <div className={`${styles.featuresCol} col`}>
                        <h5>Automated Response</h5>
                        <p>Many SIEM solutions incorporate automation features that can respond to certain types of threats automatically.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyFeaturesSection;