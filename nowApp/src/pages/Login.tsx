import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Login: React.FC = () => {

  const navigation = useIonRouter()

  const doLogin = () => {
    navigation.push('/app', 'forward', 'replace')
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar> 
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle class="ion-padding" color="dark" size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />

        <IonButton onClick={() => doLogin()} expand = "full">Login</IonButton>


      </IonContent>


    </IonPage>
  );
};

export default Login;
