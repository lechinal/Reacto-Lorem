import styles from "../Logo/Logo.module.css"; 

import LogoSvgFile from "../../assets/logo.svg?react";

function Logo(props) {
  const { className, ...restProps } = props;
  return (
    <LogoSvgFile 
      className={`${styles.logoDefault} ${className || ""}`}
      aria-hidden="true"
      focusable="false"
      {...restProps}
    />
  );
}

export default Logo;
