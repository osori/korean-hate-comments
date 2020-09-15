import React, { useState } from 'react';
import axios from 'axios';

import { IonGrid, IonCol, IonRow, IonCard, IonList, IonCardTitle, IonTextarea, IonItem, IonLabel, IonButton, IonCardHeader, IonCardSubtitle, IonContent, IonListHeader, IonItemDivider, IonText, IonNote, IonSearchbar, useIonViewWillEnter, IonToggle } from '@ionic/react';

interface ContainerProps {

}

interface Comment {
    article_title: string;
    article_url: string;
    text: string;
    prob: number;
    commenter: string;
    datetime: string;
}


const HateCommentsContainer: React.FC<ContainerProps> = ({  }) => {

  const [text, setText] = useState<string>();
  const [busy, setBusy] = useState<boolean>(false);
  const [showHateOnly, setShowHateOnly] = useState<boolean>(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [keyword, setKeyword] = useState<string>("아이유");

  useIonViewWillEnter(() => {
    updateComments(keyword, showHateOnly); 
  })


  const API_URL = 'http://akpl.ilkyu.kr:8080/find/';
  const EXPORT_URL = 'http://akpl.ilkyu.kr:8080/export/'

  const getBgColor = (prob:number) => {
    prob *= 100
    if (prob < 50){
        return "secondary"
    } else if (prob < 60){
        return "success"
    } else if (prob < 70){
        return "warning"
    } else {
        return "danger"
    }
  }

  const updateComments = (keyword:string, _hateOnly:boolean) => {
    let hateOnly = _hateOnly ? "1" : "0"
    setBusy(true);
    axios.get(API_URL + keyword + "/" + 100 + "/" + hateOnly).then(resp => resp.data)
        .then((data) => {
            setComments(data)
        })
        setBusy(false)

  }

  const showHateOnlyChecked = (checked:boolean) => {
      setShowHateOnly(checked);
      updateComments(keyword, checked)
  }

  const exportComments = () => {
      let hateOnly = showHateOnly ? "1" : "0"
    axios({
        url: EXPORT_URL + keyword + "/" + hateOnly,
        method: 'GET',
        responseType: 'blob',
    }).then( (resp) => {
        const type = resp.headers['content-type'];
        const url = window.URL.createObjectURL(new Blob([resp.data], {type: type}));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'akpl_'+keyword+'.xlsx');
        document.body.appendChild(link);
        link.click();
    })
  }


  return (
    <div>
        <IonItemDivider>아래에 검색할 키워드를 입력하세요</IonItemDivider>
        <IonSearchbar placeholder="아이유" onIonChange={e => {updateComments(e.detail.value!, showHateOnly); setKeyword(e.detail.value!)}}></IonSearchbar>
        <IonItemDivider><IonItem>악플만 보기<IonToggle checked={showHateOnly} onIonChange={(e => {showHateOnlyChecked(e.detail.checked)})} color="danger" /></IonItem></IonItemDivider>
        <IonItemDivider><IonItem button onClick={() => exportComments()} >내보내기 (.xlsx)</IonItem></IonItemDivider>
        <IonList>
        {comments.map((comment, i) => (
            <IonItem>
                <IonLabel className="ion-text-wrap">
                    <IonText color={getBgColor(comment.prob)}>
                    <h1>{comment.text}</h1>
                    </IonText>
                    <p>작성자: {comment.commenter} | {comment.datetime}</p>
                    <p>원글: {comment.article_title} (<a target="_blank" href={comment.article_url}>{comment.article_url}</a>)</p>

                </IonLabel>
                <IonText slot="start" color={getBgColor(comment.prob)}><h1>{Math.floor(comment.prob*100)}%</h1></IonText>
            </IonItem>
        ))}
        </IonList>
    </div>
  );
};

export default HateCommentsContainer;
