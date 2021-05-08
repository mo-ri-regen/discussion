import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Link from 'next/link'

import { Header } from '../components/header'
import { Contribution} from '../components/contribution'

export default function Home() {
  //投稿テキスト
  const [contributionText, setContributionText] = useState<string>('');
  //話し終えたお題
  const [finishedText, setFinishedText] = useState<string[]>([]);
  //お話し中
  const [talkingText, setTalkingText] = useState<string[]>([]);
  //未着手のお題
  const [noBeginingText, setNoBeginingText] = useState<string[]>([]);

  let noBeginingArea = {
    backgroundColor: "#8ba2bd",
    
  };
  //未着手のお題へいくテキスト
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContributionText(e.target.value);
    //setAddText(e.target.value);
    localStorage.setItem('text',contributionText);
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
  const onClickDeleteTalking =(index:number)=>{
    const text :string[]= [...noBeginingText];
    text.splice(index, 1);
    setNoBeginingText(text);
    
  };
  //投稿ボタンクリック
  const handleContribution = () => {
    const text :string[]= [...noBeginingText, contributionText];
    setNoBeginingText(text);
    setContributionText("");
  };
  //トーク終了ボタン押下
  const onChangeTalkingFinish = (changeTalkingText:string, index:number) =>{
    const textList :string[]=[...noBeginingText];
    const text :string[] = [...finishedText, changeTalkingText];
    setFinishedText(text);
    textList.splice(index, 1);
    setNoBeginingText(textList);
  };
//話し終えたお題の削除
  const onClickDeleteFinishTalking =(index:number)=>{
    const text:string[] = [...finishedText];
    text.splice(index, 1);
    setFinishedText(text);
  };

  // //WebStorageに投稿内容保存
  // try{
  //   //利用可否チェック
  //   localStorage.setItem('_test', 0);
  //   localStorage.removeItem('_test');
  // }
  // catch(e){
  //   alert(e);
  // }

  //投稿内容のロード
  const loadText = () =>{

  };

  return (
    <div className={styles.container}>
      <Head>
        <title>パネルディスカッション</title>
        <link rel="icon" href="/it-kingdom.png" />
      </Head>

      <Header />
      
      <main className={styles.main}>
        {/* モーダルウィンドウ */}
        {/* 参考(MIT)https://github.com/codrops/ModalWindowEffects */}
        {/* <div className={styles.mdModal styles.mdEffect1} id="modal-1">
          <div className={styles.mdContent}>
            <h3>Modal Dialog</h3>
            <div>
              <p>This is a modal window. You can do the following things with it:</p>
              <ul>
                <li><strong>Read:</strong> Modal windows will probably tell you something important so don't forget to read what it says.</li>
                <li><strong>Look:</strong> modal windows enjoy a certain kind of attention; just look at it and appreciate its presence.</li>
                <li><strong>Close:</strong> click on the button below to close the modal.</li>
              </ul>
              <button className={styles.mdClose}>Close me!</button>
            </div>
          </div>
        </div> */}
       
        <div className={styles.mdOverlay}></div>
        {/* 投稿エリア */}
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
