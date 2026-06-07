import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const links = [
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/track/1hF1UTrEhEtsH3XCiAFsSn?si=6c63d0c9471f477e',
    variant: 'primary',
  },
  {
    label: 'Bandcamp',
    href: 'https://matansweeto.bandcamp.com/album/spiraling-rainbows',
    variant: 'secondary',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@Matansweeto',
    variant: 'secondary',
  },
  {
    label: 'Main Website',
    href: 'https://matansweeto.com',
    variant: 'secondary',
  },
];

export default function LinkInBio() {
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <div className={styles.profileWrap}>
          <Image
            src="/images/guitar.JPG"
            alt="Matan Sweeto playing guitar"
            width={120}
            height={120}
            className={styles.profilePhoto}
            priority
          />
        </div>

        <h1 className={styles.title}>Matan Sweeto</h1>
        <p className={styles.subtitle}>
          Music, retreats, and everything I’m sharing right now — all in one place.
        </p>

        <Link
          href="https://open.spotify.com/track/1hF1UTrEhEtsH3XCiAFsSn?si=6c63d0c9471f477e"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.heroBlock}
          aria-label="Open Spotify track preview"
        >
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Featured on Spotify</span>
            <div className={styles.heroTitle}>Listen to Spiraling Rainbows</div>
            <div className={styles.heroText}>
              Tap to open the track on Spotify.
            </div>
          </div>
          <Image
            src="/images/rainbowBEACH.jpeg"
            alt="Spiraling Rainbows Spotify preview artwork"
            width={600}
            height={600}
            className={styles.heroImage}
          />
        </Link>

        <nav className={styles.buttonContainer} aria-label="Social and external links">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${
                link.variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}
