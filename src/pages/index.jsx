import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from 'next/link'

import { Header } from '../components/header'
import { Contribution} from '../components/contribution'

export default function Home() {
  //投稿テキスト
  const [contributionText, setContributionText] = useState();
  //話し終えたお題
  const [finishedText, setFinishedText] = useState([]);
  //お話し中
  const [talkingText, setTalkingText] = useState([]);
  //未着手のお題
  const [noBeginingText, setNoBeginingText] = useState([]);

  let noBeginingArea = {
    backgroundColor: "#8ba2bd",
    
  };
  //未着手のお題へいくテキスト
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
    
  };
  //お題の削除
  const onClickDeleteTalking =(index)=>{
    const text = [...noBeginingText];
    text.splice(index, 1);
    setNoBeginingText(text);
    
  };
  //投稿ボタンクリック
  const handleContribution = () => {
    const text = [...noBeginingText, contributionText];
    setNoBeginingText(text);
    setContributionText("");
  };
  //トーク終了ボタン押下
  const onChangeTalkingFinish = (changeTalkingText, index) =>{
    const textList=[...noBeginingText];
    const text = [...finishedText, changeTalkingText];
    setFinishedText(text);
    textList.splice(index, 1);
    setNoBeginingText(textList);
  };
//話し終えたお題の削除
  const onClickDeleteFinishTalking =(index)=>{
    const text = [...finishedText];
    text.splice(index, 1);
    setFinishedText(text);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>パネルディスカッション</title>
        <link rel="icon" href="/it-kingdom.png" />
      </Head>

      <Header />
      
      <main className={styles.main}>
        {/* 投稿エリア */}
        <h2>お題がある人はテキストに入力してね</h2>
        <Contribution contributionText={contributionText} onChangeText={onChangeText} handleContribution={handleContribution}/>
      
        {/* 未着手のお題 */}
        <div className={styles.no_begining_area_component}>
          <h2>話していないお題(チェックはお話し中のお題)</h2>
          <ul>
            {noBeginingText.map((noBegining,index) => {
              return (
                // <div className={styles.no_begining_area}>
                <div style={noBeginingArea}>
                  <li>
                    <label><input type="checkbox" value="{noBegining}"></input>
                    {noBegining}
                    </label>
                  </li>
                  <button onClick={()=>onChangeTalkingFinish(noBegining, index)}>トーク終了</button>
                  <button onClick={()=>onClickDeleteTalking(index)}>削除</button>
                </div>
              );
            })}
          </ul>
        </div>

        {/* 話し終えたお題 */}
        <h2>話し終えたお題</h2>
        <div className={styles.no_begining_area_component}>  
          <ul>
            {finishedText.map((finishing,index) => {
              return (
                // <div className={styles.no_begining_area}>
                <div style={noBeginingArea}>
                  <li>{finishing}</li>
                  {/* <button onClick={()=>onChangeTalkingFinish(noBegining)}>トーク終了</button> */}
                  <button onClick={()=>onClickDeleteFinishTalking(index)}>削除</button>
                </div>
              );
            })}
          </ul>
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
