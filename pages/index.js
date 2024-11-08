import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout, { siteTitle } from "@/components/Layout";

import Link from "next/link"
import utilStyles from "../styles/utils.module.css"
import  {getPostsData}  from "@/lib/post";


// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData()
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home({ allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>自己紹介です</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingMd}>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail})=>
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage}/>
              </Link>
              <Link href={`/posts/${id}`}>
                <p className={utilStyles.boldText}>{title}</p>
              </Link>
              <br/>
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          )}
        </div>
      </section>

    </Layout>
  );
}
