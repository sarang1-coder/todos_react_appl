import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';



function App() {


  return (
    <>
    <div className="container banner">
      <canvas id="canvas" width="400" height="400">
        <PageTitle>My ToDo APP</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
      </canvas>
    </>
  );
}

export default App;
