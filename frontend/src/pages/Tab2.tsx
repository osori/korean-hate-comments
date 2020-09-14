import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import HatePredictContainer from '../components/HatePredictContainer';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>혐오 표현 검사</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">혐오 표현 검사기</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HatePredictContainer name="혐오 표현 검출 테스트" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
