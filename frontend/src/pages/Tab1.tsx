import React, {useState} from 'react';
import { IonContent, IonButton, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonGrid, IonCol, IonRow, IonAvatar, IonIcon, IonText, IonThumbnail, IonSelectOption, IonSelect, IonDatetime, IonToggle, IonInput, IonCheckbox, IonRange, IonNote, IonItemDivider, IonSearchbar } from '@ionic/react';
import HateCommentsContainer from '../components/HateCommentsContainer';
import { closeCircle, home, star, navigate, informationCircle, checkmarkCircle, shuffle } from 'ionicons/icons';

import './Tab1.css';

const Tab2: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>키워드로 악플 찾기</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">키워드로 악플 찾기</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HateCommentsContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
