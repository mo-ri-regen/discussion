import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from 'next/link'

export default function Home() {
  //投稿テキスト
  const [contributionText, setContributionText] = useState();
  //話し終えた話題
  const [finishedText, setFinishedText] = useState([]);
  //お話し中
  const [talkingText, setTalkingText] = useState([]);
  //未着手の話題
  const [noBeginingText, setNoBeginingText] = useState([]);

  //未着手の話題へいくテキスト
  const onChangeText = (e) => {
    setContributionText(e.target.value);
    //setAddText(e.target.value);
  };
  const onClickAdd = () => {
    // alert(text);
  };
  //投稿ボタンクリック
  const handleContribution = (e) => {
    // setContributionText(contributionText);
    const text = [...noBeginingText, contributionText];
    setNoBeginingText(text);
    setContributionText("");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>パネルディスカッション</title>
        <link rel="icon" href="/it-kingdom.png" />
      </Head>

      <header>
        <h1 className={styles.title}>Pannel Discussion</h1>
        <div>
          <Link href="./admin.jsx">管理者はこちら</Link>
        </div>
        一般画面へ
      </header>
      <main className={styles.main}>

        {/* 未着手の話題 */}
        <div className={styles.no_begining_area}>  
          <ul>
            {noBeginingText.map((noBegining) => {
              return (
                <div className={styles.no_begining_area}>
                  <li>{noBegining}</li>
                  <button>お話し中</button>
                  <button>削除</button>
                </div>
              );
            })}
          </ul>
        </div>

        {/* 投稿エリア */}
        <div className={styles.contribution_area}>
          <label for="contribute">投稿</label>
          <textarea
            id="contribute"
            value={contributionText}
            onChange={onChangeText}
          ></textarea>
          <button onClick={handleContribution}>投稿</button>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
