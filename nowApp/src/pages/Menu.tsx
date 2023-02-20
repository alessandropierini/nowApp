import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { exit, homeOutline, newspaperOutline, people, person } from 'ionicons/icons'
import { Redirect, Route } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Login from './Login';
import Profile from './Profile';
import Users from './Users';

const Menu: React.FC = () => {

  const paths = [
    { name: 'Profile', url: '/app/profile', icon: person },
    { name: 'Users', url: '/app/users', icon: people }
  ]

  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>

            {paths.map((item, index) => (
              <IonMenuToggle key={index}>
                <IonItem routerLink={item.url} routerDirection="none">
                  <IonIcon class="ion-padding" icon = {item.icon}></IonIcon>
                  {item.name}
                </IonItem>

              </IonMenuToggle>
            ))}
              <IonButton color="dark" class="ion-padding" routerLink="/" routerDirection='back' expand = "full">
                Logout
              </IonButton>

          </IonContent>

        </IonMenu>

        <IonRouterOutlet id="main">
          <Route exact path="/app/profile" component={Profile} />          
          <Route exact path = "/app">
            <Redirect to = "/app/profile"></Redirect>
          </Route>
          <Route exact path="/app/users" component={Users} />          
          <Route exact path = "/app">
            <Redirect to = "/app/profile"></Redirect>
          </Route>
        </IonRouterOutlet>

      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
