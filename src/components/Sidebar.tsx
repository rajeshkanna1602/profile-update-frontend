import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import styles from "./Sidebar.module.css";

export const Sidebar = () => (
  <div className={styles.flexChildA}>
    <div className={styles.outerDiv}>
      <div className={styles.menuIcon}>
        <div className={styles.kyroStyle}>KYRO</div>
        <MenuIcon />
      </div>
      <div className={styles.menuPart}>
        <div className={styles.menu}>
          <div className={styles.eachIcon}>
            <HomeIcon color="disabled" />
          </div>
          <div className={styles.menuText}>Home</div>
        </div>
        <div className={styles.menu}>
          <div className={styles.eachIcon}>
            <AssignmentIcon color="disabled" />
          </div>
          <div className={styles.menuText}>Projects</div>
        </div>
        <div className={styles.menu}>
          <div className={styles.eachIcon}>
            <GridViewRoundedIcon color="disabled" />
          </div>
          <div className={styles.menuText}>Dashboard</div>
        </div>
        <div className={styles.menu}>
          <div className={styles.eachIcon}>
            <ForumRoundedIcon color="disabled" />
          </div>
          <div className={styles.menuText}>Messages</div>
        </div>
        <div className={styles.menu}>
          <div className={styles.eachIcon}>
            <ArticleIcon color="disabled" />
          </div>
          <div className={styles.menuText}>Documents</div>
        </div>
        <div className={styles.menu}>
          <div className={styles.eachIcon}>
            <CorporateFareIcon color="disabled" />
          </div>
          <div className={styles.menuText}>Organizations</div>
        </div>
        <div className={styles.menu}>
          <div className={styles.eachIcon}>
            <SettingsIcon color="disabled" />
          </div>
          <div className={styles.menuText}>Settings</div>
        </div>
      </div>
      <div className={styles.menuSecPart}>
        <div className={styles.menu}>
          <div className={styles.eachIcon}>
            <LogoutIcon color="disabled" />
          </div>
          <div className={styles.menuText}>Logout</div>
        </div>
      </div>
    </div>
  </div>
);
