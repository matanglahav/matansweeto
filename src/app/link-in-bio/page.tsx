import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const links = [
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/1gbdkHLoka2Y0PaH2d5KPO?si=PQwM850HTMC8Chss-mKttQ',
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
