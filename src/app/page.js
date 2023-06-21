import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function NextPage() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link className={styles.card} href="/home">
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Home features.</p>
        </Link>

        <Link className={styles.card} href="/about">
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>Find in-depth information on About features.</p>
        </Link>

        <Link className={styles.card} href="/dashboard">
          <h2>
            Dashboard <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Dashboard features.</p>
        </Link>

        <Link className={styles.card} href="/personal">
          <h2>
            Personal <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Personal data features.</p>
        </Link>

        <Link className={styles.card} href="/irrelevant">
          <h2>
            Irrelevant Route <span>-&gt;</span>
          </h2>
          <p>No such route is present.</p>
        </Link>
      </div>
    </main>
  );
}
