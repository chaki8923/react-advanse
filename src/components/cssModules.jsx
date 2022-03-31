import classes from "./cssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>-CSS MODULES-</p>
      <button className={classes.btn}>Fight!</button>
    </div>
  );
};
