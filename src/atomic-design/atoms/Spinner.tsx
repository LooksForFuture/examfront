const Spinner = () => {
  return (
    <div className="card-body demo-vertical-spacing-lg demo-only-element px-5">
      <div
        className="row py-sm-4 gy-3 gy-sm-0"
        style={{ position: "relative" }}
      >
        <div
          className="col"
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            height: "100%",
            position: "absolute",
            width: "100%",
            paddingTop: "26%",
          }}
        >
          <div className="sk-fold sk-primary">
            <div className="sk-fold-cube"></div>
            <div className="sk-fold-cube"></div>
            <div className="sk-fold-cube"></div>
            <div className="sk-fold-cube"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
