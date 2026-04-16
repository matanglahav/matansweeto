import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const LinkInBio = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Image 
                    src="/path-to-your-profile-photo.jpg" 
                    alt="Profile Photo" 
                    width={100} 
                    height={100} 
                    className={styles.profilePhoto} 
                />
                <h1>Your Name</h1>
                <div className={styles.artworkPlaceholder}></div>
                <div className={styles.buttonContainer}>
                    <Link href="https://spotify.com" className={styles.button}>Spotify</Link>
                    <Link href="https://bandcamp.com" className={styles.button}>Bandcamp</Link>
                    <Link href="https://youtube.com" className={styles.button}>YouTube</Link>
                    <Link href="https://yourwebsite.com" className={styles.button}>Main Website</Link>
                    <Link href="https://jungleimmersionretreat.com" className={styles.button}>Jungle Immersion Retreat</Link>
                </div>
            </div>
        </div>
    );
};

export default LinkInBio;