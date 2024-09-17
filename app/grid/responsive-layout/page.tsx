import { classLister } from "@/utils";
import styles from "./index.module.css";

export default function ResponsiveLayout() {
  const classes = classLister(styles);

  return (
    <div className={classes("wrapper", "baseItem")}>
      <header className={classes("header", "baseItem")}>Header</header>
      <nav className={classes("nav", "baseItem")}>Navigation</nav>
      <nav className={classes("signUp", "baseItem")}>SignUp</nav>
      <nav className={classes("content", "baseItem")}>
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
      </nav>
      <div className={classes("featureRed", "baseItem")}>FeatureRed</div>
      <div className={classes("featurePurple", "baseItem")}>FeaturePurple</div>
      <footer className={classes("footer", "baseItem")}>Footer</footer>
    </div>
  );
}
