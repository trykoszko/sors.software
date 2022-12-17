import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const HomeComponent = () => {
    const services = [
        {
            key: 0,
            title: 'Back-end development',
            items: [
                'Node.js development',
                'Nest.js development',
                'API development',
                'Web application development',
                'Web integrations development',
            ],
            logos: [
                {
                    icon: '/nodejs-icon.svg',
                    alt: 'Node JS'
                },
                {
                    icon: '/nestjs-icon.svg',
                    alt: 'Nest JS'
                },
                {
                    icon: '/expressjs-icon.svg',
                    alt: 'Express JS'
                },
                {
                    icon: '/aws-icon.svg',
                    alt: 'Amazon Web Services'
                }
            ]
        },
        {
            key: 1,
            title: 'WordPress development',
            items: [
                'WordPress plugin development',
                'WordPress theme development',
                'WordPress website development',
                'WooCommerce store development',
                'Gutenberg blocks development',
                'WordPress and WooCommerce support',
                'Headless WordPress development'
            ],
            logos: [
                {
                    icon: '/wordpress-icon.svg',
                    alt: 'WordPress'
                },
                {
                    icon: '/woocommerce-icon.svg',
                    alt: 'WooCommerce'
                }
            ]
        },
        {
            key: 2,
            title: 'Front-end development',
            items: [
                'Next.js development',
                'Gatsby development',
                'React development',
                'JAMstack development',
                'Javascript development',
            ],
            logos: [
                {
                    icon: '/nextjs-icon.svg',
                    alt: 'Next JS'
                },
                {
                    icon: '/gatsby-icon.svg',
                    alt: 'Gatsby'
                },
                {
                    icon: '/react-icon.svg',
                    alt: 'React'
                },
                {
                    icon: '/typescriptlang-icon.svg',
                    alt: 'Typescript'
                }
            ]
        }
    ]

    const currentYear = (new Date()).getFullYear()

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>

                <div className={styles.bg}>
                    <svg
                        className={styles.bgShape}
                        viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#9089FC" fillOpacity=".1"
                              d="M317.217 528.975L203.852 678 0 438.341l317.219 40.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
                    </svg>
                </div>

                <header className={styles.header}>
                    <Link
                        href="/"
                        rel="noopener noreferrer"
                        className={styles.headerLogo}
                    >
                        <Image
                            className={styles.headerLogoImage}
                            src="/sors.svg"
                            alt="Next.js Logo"
                            width={80}
                            height={80}
                            priority
                        />
                    </Link>

                    <Link
                        href="mailto:company@sors-dev.codes"
                        className={styles.headerButton}
                    >
                        Contact us &raquo;
                    </Link>
                </header>

                <main className={styles.main}>
                    <div className={styles.mainContent}>
                        <h1 className={styles.mainContentHeading}>We create <span className={styles.specialText}>quality software</span></h1>
                        <p className={styles.mainContentText}>
                            With many years of experience in web development industry, we deliver top class software for local and global brands. <span className={styles.specialText}>Let's create something great <strong>together</strong>.</span>
                        </p>
                    </div>

                    <ul className={styles.mainGrid}>
                        {services && services.map((service, i) => (
                            <li key={i} className={styles.mainGridBox}>
                                <h2 className={styles.mainGridBoxTitle}>{service.title}</h2>
                                <ul className={styles.mainGridBoxList}>
                                    {service.items && service.items.map((item, i) => (
                                        <li key={i} className={`${styles.mainGridBoxListItem}`}>{item}</li>
                                    ))}
                                </ul>
                                <ul className={styles.mainGridBoxIconList}>
                                    {service.logos && service.logos.map((logo, i) => (
                                        <li className={`${styles.mainGridBoxIcon}`} key={i}>
                                            <Image
                                                src={logo.icon}
                                                alt={logo.alt}
                                                width={32}
                                                height={32}
                                                className={styles.mainGridBoxImage}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </main>

                <footer className={styles.footer}>
                    <p className={styles.footerText}>&copy; sors.software {currentYear}</p>
                </footer>

            </div>
        </div>
    );
}
