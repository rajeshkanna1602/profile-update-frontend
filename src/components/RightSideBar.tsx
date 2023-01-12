import React from "react";
import styles from "./RightSideBar.module.css";
import Button from "@mui/material/Button";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const RightSideBar = (props: any) => {
  const {
    firstname,
    lastname,
    email,
    displayname,
    priphone,
  } = props.profileInput;
  return (
    <div className={styles.flexChildC}>
      <div className={styles.rightTop}>
        <div>
          <Button
            style={{
              backgroundColor: "red",
            }}
            variant="contained"
          >
            + ADD PROJECT
          </Button>
        </div>
        <div>
          <AccountBoxIcon style={{ fontSize: "36px" }} />
        </div>
        <div>
          <p className={styles.pmTitle}>
            <em>{displayname}</em>
          </p>
          <p className={`${styles.pmTitle} ${styles.pmDesin}`}>
            Project Manager
          </p>
        </div>
      </div>
      <div className={styles.profilePreview}>
        <div>
          <div>
            <AccountBoxIcon style={{ fontSize: "180px" }} />
          </div>
          <div>
            <div className={styles.basicPad}>{firstname + " " + lastname}</div>
            <div className={styles.basicPad}>{email}</div>
            <div className={styles.basicPad}>{displayname}</div>
            <div className={styles.basicPad}>{priphone}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
