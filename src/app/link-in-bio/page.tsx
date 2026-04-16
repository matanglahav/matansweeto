import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const links = [
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/',
    variant: 'primary',
  },
  {
    label: 'Bandcamp',
    href: 'https://bandcamp.com/',
    variant: 'secondary',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/',
    variant: 'secondary',
  },
  {
    label: 'Main Website',
    href: 'https://matansweeto.com',
    variant: 'secondary',
  },
  {
    label: 'Jungle Immersion Retreat',
    href: 'https://jungleimmersionretreat.com',
    variant: 'secondary',
  },
];

export default function LinkInBio() {
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <div className={styles.profileWrap}>
          <Image
            src="/path-to-your-profile-photo.jpg"
            alt="Profile Photo"
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

        <div className={styles.heroBlock}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Featured on Spotify</span>
            <div className={styles.heroTitle}>New music / latest release</div>
            <div className={styles.heroText}>
              Swap this block for your cover art or a promo image.
            </div>
          </div>
        </div>

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