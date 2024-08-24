import Styles from "/public/css/styles.module.css";


function LoadingPage(){
    
    return (
    <div>
      <div className={`${Styles.loadingBox}`}>
        <div>
          <h3 className={`${Styles.loader} p-5`}></h3>
        </div>
      </div>
    </div>
    );
}

export default LoadingPage;