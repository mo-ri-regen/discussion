export default function talking() {
  //投稿テキスト
  const [contributionText, setContributionText] = useState("");
  //話し終えた話題
  const [finishedText, setFinishedText] = useState([""]);
  //お話し中
  const [talkingText, setTalkingText] = useState([""]);
  //未着手の話題
  const [noBeginingText, setNoBeginingText] = useState([""]);

  
  //投稿ボタンクリック
  const handleContribution = (e) => {
    // setContributionText(contributionText);
    const text = [...noBeginingText, contributionText];
    setNoBeginingText(text);
    setContributionText("");
  };

  // constructor(props){
  //   super(props);

  //}
  return (
    <div className={styles.container}>
      <Head>
        <title>パネルディスカッション</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className={styles.title}>Pannel Discussion</h1>
        <div>
          <Link href={"./admin.jsx"}>管理者はこちら</Link>
        </div>
        一般画面へ
      </header>
      <main className={styles.main}>
        
       <div>aaa</div>
      </main>

      
    </div>
  );
}