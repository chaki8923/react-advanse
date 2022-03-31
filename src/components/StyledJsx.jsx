export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="btn">Fight</button>
      </div>
      <style jsx="true">{`
        .container {
          width: 80%;
          margin: 24px auto;
          border-radius: 8px;
          border: 1px solid blue;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 12px 10px;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }

        .btn {
          border: none;
          color: #fff;
          background-color: #abedd8;
          border-radius: 8px;
          padding: 8px;
        }
      `}</style>
    </>
  );
};
