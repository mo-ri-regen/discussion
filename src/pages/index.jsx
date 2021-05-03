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

  let noBeginingArea = {
    backgroundColor: "#8ba2bd",
    
  };
  //未着手の話題へいくテキスト
  const onChangeText = (e) => {
    setContributionText(e.target.value);
    //setAddText(e.target.value);
  };
  const onClickAdd = () => {
    // alert(text);
  };
  //話し中の背景変更
  const onChangeTalkingStyle = ()=>{
    // const talking = styles.no_begining_area;
    // talking.style.backgroundColor="#c3ebff"
    // noBeginingArea.backgroundColor=
    alert("aa");
  };
  //話題の削除
  const onClickDelete =(index)=>{
    const text = [...noBeginingText];
    text.splice(index, 1);
    setNoBeginingText(text);
    
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
          <Link href={"/admin"}>Admin</Link>
        </div>
        <div>
          <Link href={"/"}>Gest</Link>
        </div>
      </header>
      <main className={styles.main}>

        {/* 未着手の話題 */}
        <div className={styles.no_begining_area_component}>  
          <ul>
            {noBeginingText.map((noBegining,index) => {
              return (
                // <div className={styles.no_begining_area}>
                <div style={noBeginingArea}>
                  <li>{noBegining}</li>
                  <button onClick={onChangeTalkingStyle}>お話し中</button>
                  <button onClick={()=>onClickDelete(index)}>削除</button>
                </div>
              );
            })}
          </ul>
        </div>

        {/* 投稿エリア */}
        <div className={styles.contribution_area}>
          {/* <label for="contribute">投稿</label> */}
          <textarea
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
