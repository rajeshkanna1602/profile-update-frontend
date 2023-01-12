import React, { useState } from "react";
import styles from "./ProfilePage.module.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useEffect } from "react";
import { profile } from "console";
import { RightSideBar } from "./RightSideBar";
// import { useState } from "react";

export const ProfilePage = (props: any) => {
  const [apiData, setApiData] = useState({
    firstname: "",
    lastname: "",
    displayname: "",
    email: "",
    priphone: "",
    workphone: "",
    location: "",
  });
  const [enableResetChanges, setEnableResetChanges] = useState(true);
  //   const [fname, setFName] = useState("fname");
  const [enableSaveChanges, setEnableSaveChanges] = useState(true);
  const [messages, setMessage] = useState("");
  const [profileInput, setProfileInput] = useState({
    firstname: "",
    lastname: "",
    displayname: "",
    email: "",
    priphone: "",
    workphone: "",
    location: "",
  });

  const emailValidation = () => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(!profileInput.email || regex.test(profileInput.email) === false);
  };

  const handleInputChange = (e: any) => {
    const { value, name, id } = e.target;
    setProfileInput({
      ...profileInput,
      [name]: value,
    });
  };
  const handleSaveChanges = () => {
    const profileInputBody = {
      firstName: profileInput.firstname,
      lastName: profileInput.lastname,
      email: profileInput.email,
      displayName: profileInput.displayname,
      priPhone: profileInput.priphone,
      workPhone: profileInput.workphone,
      location: profileInput.location,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileInputBody),
    };
    fetch("http://localhost:5000/api/profile", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setMessage(data.message);
        } else {
          setMessage(data.error);
        }
      });
  };

  const isData = () => {
    const {
      firstname,
      lastname,
      displayname,
      email,
      priphone,
      workphone,
      location,
    } = profileInput;
    if (
      firstname.length > 0 &&
      lastname.length > 0 &&
      displayname.length > 0 &&
      email.length > 0 &&
      Number(priphone) > 0 &&
      Number(workphone) > 0 &&
      location.length > 0
    )
      return false;

    return true;
  };

  const isApiDataChanged = () => {
    setEnableResetChanges(
      JSON.stringify(apiData).replace(/["]+/g, "") ===
        JSON.stringify(profileInput).replace(/["]+/g, "")
    );
  };

  const handleresetChanges = () => {
    if (apiData) {
      setProfileInput(apiData);
    }
  };

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "testuser@email.com" }),
    };
    fetch("http://localhost:5000/api/getProfile", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setProfileInput(data.data[0]);
        setApiData(data.data[0]);
      });
  }, []);

  useEffect(() => {
    setMessage("");
    setEnableSaveChanges(isData());
    isApiDataChanged();
  }, [profileInput]);
  return (
    <>
      <div className={styles.flexChildB}>
        <div className={styles.outerDiv}>
          <div className={styles.topTiles}>
            <div className={styles.basicStyle}>
              Good Morning, {profileInput.displayname}
            </div>
            <div className={styles.basicStyle}>
              {new Date().toLocaleDateString()}
            </div>
          </div>
          <div className={styles.myProfileTitle}>My Profile</div>
          <div className={styles.profileEditing}>
            <div className={styles.inputRow}>
              <div>
                <TextField
                  id="outlined-required"
                  label="First Name"
                  defaultValue={profileInput.firstname}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleInputChange}
                  name="firstname"
                  value={profileInput.firstname}
                />
              </div>
              <div>
                <TextField
                  id="outlined-required"
                  label="Last Name"
                  defaultValue=" "
                  value={profileInput.lastname}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleInputChange}
                  name="lastname"
                />
              </div>
            </div>
            <div className={styles.inputRow}>
              <div>
                <TextField
                  id="outlined-required"
                  label="Display Name"
                  defaultValue=" "
                  value={profileInput.displayname}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBoxOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleInputChange}
                  name="displayname"
                />
              </div>
              <div>
                <TextField
                  id="outlined-required"
                  label="Email"
                  defaultValue=" "
                  value={profileInput.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                  disabled
                />
              </div>
            </div>
            <div className={styles.inputRow}>
              <div>
                <TextField
                  id="outlined-required"
                  label="Phone No(Work)"
                  defaultValue=" "
                  value={profileInput.priphone}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleInputChange}
                  name="priphone"
                  type="number"
                />
              </div>
              <div>
                <TextField
                  id="outlined-required6"
                  label="Phone No (Work)"
                  defaultValue=" "
                  value={profileInput.workphone}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleInputChange}
                  name="workphone"
                  type="number"
                />
              </div>
            </div>
            <div className={`${styles.inputRow} ${styles.finalRow}`}>
              <div>
                <TextField
                  id="outlined-required"
                  label="location"
                  defaultValue=" "
                  value={profileInput.location}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleInputChange}
                  name="location"
                />
              </div>
            </div>
            <div className={styles.buttonStyle}>
              <Button
                style={{
                  backgroundColor: "red",
                }}
                variant="contained"
                onClick={handleSaveChanges}
                disabled={enableResetChanges}
              >
                SAVE CHANGES
              </Button>
              <Button
                style={{
                  backgroundColor: "red",
                }}
                variant="contained"
                onClick={handleresetChanges}
                disabled={enableResetChanges}
              >
                Reset CHANGES
              </Button>
            </div>
            <div className={styles.apiMessage}>{messages}</div>
          </div>
        </div>
      </div>
      <RightSideBar profileInput={profileInput} />
    </>
  );
};
