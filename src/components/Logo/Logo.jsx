import styles from "../Logo/Logo.module.css"; // Importă stilurile CSS pentru componenta Logo

import LogoSvgFile from "../../assets/logo.svg?react";

function Logo(props) {
  const { className, ...restProps } = props;
  return (
    <LogoSvgFile // Folosește direct componenta importată
      className={`${styles.logoDefault} ${className || ""}`}
      aria-hidden="true"
      focusable="false"
      {...restProps}
    />
  );
}

export default Logo;
