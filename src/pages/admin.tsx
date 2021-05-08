import '/'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Link from 'next/link'
import { Header } from '../components/header'
import { Contribution} from '../components/contribution'

export default function Admin() {

    //投稿テキスト
  const [contributionText, setContributionText] = useState<string>();
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
    const text :string[] = [...noBeginingText];
    text.splice(index, 1);
    setNoBeginingText(text);
    
  };
  //投稿ボタンクリック
  const handleContribution = () => {
    const text :string[] = [...noBeginingText, contributionText];
    setNoBeginingText(text);
    setContributionText("");
  };
  //トーク終了ボタン押下
  const onChangeTalkingFinish = (changeTalkingText:string, index:number) =>{
    const textList=[...noBeginingText];
    const text = [...finishedText, changeTalkingText];
    setFinishedText(text);
    textList.splice(index, 1);
    setNoBeginingText(textList);
  };
//話し終えたお題の削除
  const onClickDeleteFinishTalking =(index:number)=>{
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
      
    </div>
    // return <Component {...pageProps} />
  );
}
