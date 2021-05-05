import classes from './Contribution.module.css'

export function Contribution(props){
  console.log(props);
  const {contributionText, onChangeText, handleContribution} = props;
  
  return (
    // 投稿エリア
    //  <h2>お題がある人はテキストに入力してね</h2>
     <div className={classes.contribution_area}>
       {/* <label for="contribute">投稿</label> */}
       <textarea
         value={contributionText}
         onChange={onChangeText}
       ></textarea>
       <button onClick={handleContribution}>投稿</button>
     </div>
  );
}