import Styles from "/public/css/styles.module.css";

function FallBack() {
  return (
    <div>
      <div className={`${Styles.errorBox}`}>
        <div
          style={{ backgroundColor: "darkred", borderRadius:"10px" }}
          className="text-light"
        >
          <h1 className="text-center">ERROR</h1>
        </div>
        <div>
          <h3 className="text-center py-5">Something Went Wrong</h3>
        </div>
      </div>
    </div>
  );
}

export default FallBack;
