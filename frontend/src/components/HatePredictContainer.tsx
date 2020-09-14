import React, { useState } from 'react';
import axios from 'axios';

import { IonList, IonTextarea, IonItem, IonLabel, IonButton, IonListHeader, IonItemDivider, IonText } from '@ionic/react';

interface ContainerProps {
  name: string;
}

interface Comment {
    id: number;
    text?: string;
    prob: number;
}


const HatePredictContainer: React.FC<ContainerProps> = ({ name }) => {
  const exampleComment:Comment = {
      id:0,
      text: "싹쓰리 너무 좋아요~",
      prob: 5,
  }
  const exampleComment2:Comment = {
    id:1,
    text: "솔직히 싹쓰리 안 나왔으면 좋겠다",
    prob: 63
  }
  const exampleComment3:Comment = {
    id:2,
    text: "싹쓰리 죽어라 노래도 못하는 것들이 어디서 BTS를 이기겠다고",
    prob: 93,
  }


  const [text, setText] = useState<string>();
  const [history, setHistory] = useState<Comment[]>([exampleComment, exampleComment2, exampleComment3]);
  const [busy, setBusy] = useState<boolean>(false);

  const API_URL = 'http://akpl.ilkyu.kr:8080/predict/';

  const getBgColor = (prob:number) => {
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

  const predictComment = () => {
    if (text?.length == 0 ){
        return;
    }
    setBusy(true)
    axios.get(API_URL + text).then(resp => resp.data)
        .then((data) => {
            let prob = data.prob;
            let comment = {
                id: history.length,
                text: text,
                prob: Math.floor(prob*100)
            }    
            
            setHistory([comment, ...history])
            setText("");
            console.log(history)
        })
        setBusy(false)

  }

  return (
    <div>
      <IonItem>
        <IonLabel position="stacked">혐오 표현을 검사할 문장을 입력하세요</IonLabel>
        <IonTextarea 
            value={text} 
            placeholder="싹쓰리 너무 좋아요~~"
            onIonChange={e => setText(e.detail.value!)}
        ></IonTextarea>
      </IonItem>
      <IonButton onClick={predictComment} disabled={busy} expand="block">혐오 검사</IonButton>

      <IonItemDivider>

      </IonItemDivider>
      
        <IonListHeader lines="full">
            <IonLabel><h1>검사 기록</h1></IonLabel>
        </IonListHeader>
              <IonList>
          {history.map((comment, i) => (
            <IonItem key={i}>
                <IonLabel class="sentence">
                    {comment.text}
                </IonLabel>
                <IonText slot="start" color={getBgColor(comment.prob)}>
                    악플 확률: {comment.prob}%
                </IonText>
            </IonItem>
          ))}
      </IonList>

    </div>
  );
};

export default HatePredictContainer;
