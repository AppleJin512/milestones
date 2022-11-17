import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Alert,
  LinearProgress,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Paper,
  Breadcrumbs,
  Box,
  Grid,
  Button,
  Typography,
  InputBase,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import {
  collection,
  onSnapshot,
  query,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import isEmail from "validator/lib/isEmail";
import useStyles from "../../styles/shop_style";

const ColorButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "white",
  backgroundColor: "#3c336a",
  borderRadius: "0px",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "#3c336a",
  },
}));

const OutlinedButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  width: "100%",
  color: theme.palette.grey["800"],
  borderColor: theme.palette.grey["400"],
  fontSize: "16px",
  "&:hover": {
    borderColor: theme.palette.grey["500"],
  },
}));

const UploadButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  background: theme.palette.grey["700"],
  border: `1px solid ${theme.palette.grey["900"]}`,
  color: "white",
  "&:hover": {
    background: theme.palette.grey["700"],
    border: `1px solid ${theme.palette.grey["900"]}`,
    outline: "none",
  },
}));

const StyledTextField = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    "&::placeholder": {
      textAlign: "center",
    },
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function UploadForm() {
  let navigate = useNavigate();

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      to="/"
      onClick={handleClick}
    >
      HOME
    </Link>,
    <Link underline="hover" key="2" color="inherit" to="/">
      PICTURES
    </Link>,
    <p key="3">PICTURE NAME</p>,
  ];
  const [pic, setPic] = useState("");
  const { id } = useParams();
  const [schools, setSchools] = useState([]);
  // const [sizes, setSizes] = useState([]);
  // const [plaques, setPlaques] = useState([]);

  //
  const [sschool, setSschool] = useState("");
  // const [ssize, setSsize] = useState({ price: 0, name: "" });
  // const [splaque, setSplaque] = useState({ price: 0, name: "" });
  const [playername, setPlayername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [sign, setSign] = useState("");
  // const [markprice, setMarkprice]
  //
  // const [sizebtn, setSizebtn] = useState("");
  // const [plaquebtn, setPlaquebtn] = useState("");
  const [progressimg, setProgressimg] = useState(0);
  // const [progresssign, setProgresssign] = useState(0);
  // const [openBackdrop, setOpenBackdrop] = useState(false);

  useEffect(() => {
    const q = query(doc(collection(db, "pictures"), id));
    onSnapshot(q, (s) => {
      setPic(s.data());
    });
  }, [id]);

  useEffect(() => {
    // onSnapshot(collection(db, "sizes"), (snap) => {
    //   setSizes(
    //     snap.docs.map((e) => ({
    //       id: e.id,
    //       item: e.data(),
    //     }))
    //   );
    // });
    // onSnapshot(collection(db, "plaque"), (snap) => {
    //   setPlaques(
    //     snap.docs.map((e) => ({
    //       id: e.id,
    //       item: e.data(),
    //     }))
    //   );
    // });
    onSnapshot(collection(db, "schools"), (snap) => {
      setSchools(
        snap.docs.map((e) => ({
          id: e.id,
          item: e.data(),
        }))
      );
    });
  }, []);
  const [wa, setWa] = useState(false);
  const [isValid, setIsValid] = useState(false); //email validate
  const [dirty, setDirty] = useState(false);
  // const [checksubmit, setChecksubmit] = useState(false);
  const checkValues = function () {
    if (
      sschool !== "" &&
      // ssize !== "" &&
      // splaque !== "" &&
      playername !== "" &&
      email !== "" &&
      image !== "" &&
      isValid
    )
      return true;
    else {
      setWa(true);
      // setChecksubmit(true);
      return false;
    }
  };

  const [imageurl, setImageurl] = useState("");
  const [signurl, setSignurl] = useState("");

  const addData = function () {
    const sotrageRef1 = ref(storage, `/playerimages/${id}_${image.name}`);
    const uploadTask1 = uploadBytesResumable(sotrageRef1, image);
    uploadTask1.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // update progress
        setProgressimg(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask1.snapshot.ref).then((url) => {
          setImageurl(url);
        });
        setProgressimg(0);
      }
    );

    if (sign === "") {
      setSignurl("--");
      return;
    }
    const sotrageRef2 = ref(storage, `/playersignature/${id}_${sign.name}`);
    const uploadTask2 = uploadBytesResumable(sotrageRef2, sign);
    uploadTask2.on(
      "state_changed",
      (snapshot) => {
        // const percent = Math.round(
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // );
        // update progress
        // setPercent(percent);
        // setProgresssign(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask2.snapshot.ref).then((url) => {
          // console.log(url);
          setSignurl(url);
        });
        // setProgresssign(0);
      }
    );
  };
  useEffect(() => {
    if (imageurl !== "" && signurl !== "") {
      addDoc(collection(db, "orders"), {
        picname: pic.name,
        picid: id,
        picprice: pic.price,
        school: sschool,
        // size: ssize.name,
        // plaque: splaque.name,
        playername: playername,
        email: email,
        sign: sign !== "" ? sign.name : "",
        image: image.name,
        imageurl: imageurl,
        signurl: signurl,
        timestamp: serverTimestamp(),
      });
      navigate("/submit");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageurl, signurl]);

  // const classes = useStyles();

  return (
    <div
      className="container mx-auto max-w-screen-md mb-10"
      style={{ paddingTop: 70 }}
    >
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        style={{ fontSize: "12px", margin: "5px" }}
      >
        {breadcrumbs}
      </Breadcrumbs>
      <div className="mt-3">
        <Grid
          container
          spacing={1}
          columns={{ xs: 3, sm: 3, md: 12 }}
          className=" "
        >
          <Grid item xs={3} sm={3} md={6} className="">
            <h5 className="h5 ml-5">{pic.name}</h5>
            <div className="m-10">
              <div className="w-full h-full relative picdetail-height">
                <img
                  src={pic.imgurl}
                  alt="No img"
                  className="w-auto h-auto top-2/4 left-2/4 absolute shadow-lg shadow-gray-500"
                  style={{
                    transform: "translate(-50%,-50%)",
                    width: 300,
                    height: 304,
                  }}
                  data-aos="zoom-y-out"
                />

                {/* <ShowItems /> */}
              </div>
            </div>
          </Grid>
          <Grid item xs={3} sm={3} md={6}>
            <Paper variant="outlined">
              <Box width="100%" padding={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select School <span style={{ color: "red" }}>*</span>
                  </InputLabel>
                  <Select
                    fullWidth
                    className="w-full mb-2"
                    // size='small'
                    onChange={(e) => {
                      setSschool(e.target.value);
                    }}
                    value={sschool}
                    label="School name"
                    labelId="demo-simple-select-label"
                  >
                    {schools.map((e, i) => (
                      <MenuItem value={e.item.name} key={i}>
                        {e.item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box mt={1} mb={2}>
                  <Paper variant="outlined">
                    <Box padding={1}>
                      <Box display="flex" justifyContent="center" mb={1}>
                        <Typography variant="subtitle1">Type*</Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between" px={1}>
                        <OutlinedButton variant="outlined" sx={{ mr: 3 }}>
                          Digital File
                        </OutlinedButton>
                        <OutlinedButton variant="outlined">
                          Plaque
                        </OutlinedButton>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
                <Box mt={1} mb={2}>
                  <Paper variant="outlined">
                    <Box padding={1}>
                      <Box display="flex" justifyContent="center" mb={1}>
                        <Typography variant="subtitle1">Quality*</Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between" px={1}>
                        <OutlinedButton variant="outlined" sx={{ mr: 3 }}>
                          Web
                        </OutlinedButton>
                        <OutlinedButton variant="outlined">
                          To Print
                        </OutlinedButton>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
                <Box mt={1} mb={2}>
                  <Paper variant="outlined">
                    <Box padding={1}>
                      <Box display="flex" justifyContent="center" mb={1}>
                        <Typography variant="subtitle1">
                          Player Name*
                        </Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between" px={1}>
                        <StyledTextField
                          fullWidth
                          placeholder="Enter Player Name"
                          onChange={(e) => {
                            setPlayername(e.target.value);
                          }}
                          value={playername}
                        ></StyledTextField>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
                <LinearProgress
                  color="secondary"
                  style={{ display: progressimg === 0 ? "none" : "block" }}
                  variant="determinate"
                  value={progressimg}
                />
                <Box mb={2}>
                  <Box mb={1}>
                    <UploadButton
                      variant="contained"
                      fullWidth
                      component="label"
                    >
                      {image !== "" ? image.name : "Upload Player Image*"}
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={(e) => {
                          setImage(e.target.files[0]);
                          // console.log(e.target.value)
                        }}
                        required
                        value={image.value}
                      />
                    </UploadButton>
                  </Box>
                  <Box>
                    <UploadButton
                      variant="contained"
                      fullWidth
                      component="label"
                    >
                      {sign !== "" ? sign.name : "Upload Signature*"}
                      <input
                        hidden
                        accept="*"
                        type="file"
                        onChange={(e) => {
                          setSign(e.target.files[0]);
                        }}
                      />
                    </UploadButton>
                  </Box>
                </Box>
                <Box mb={2}>
                  <Paper variant="outlined">
                    <Box padding={1}>
                      <Box display="flex" justifyContent="center" mb={1}>
                        <Typography variant="subtitle1">
                          Email Address*
                        </Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between" px={1}>
                        <StyledTextField
                          onBlur={() => setDirty(true)}
                          error={dirty && isValid === false}
                          fullWidth
                          placeholder="Enter Player Name"
                          onChange={(e) => {
                            let val = e.target.value;
                            if (isEmail(val)) {
                              setIsValid(true);
                            } else {
                              setIsValid(false);
                            }
                            setEmail(e.target.value);
                          }}
                          value={email}
                        ></StyledTextField>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
                <Box>
                  <Alert
                    severity="warning"
                    style={{ display: wa ? "flex" : "none" }}
                    className="mb-5"
                  >
                    Please fill all <span style={{ color: "red" }}>*</span>{" "}
                    fileds
                  </Alert>
                  <ColorButton
                    fullWidth
                    type="submit"
                    size="large"
                    variant="contained"
                    color="success"
                    onClick={(e) => {
                      e.preventDefault();
                      if (!checkValues()) return;
                      addData();
                    }}
                  >
                    Submit
                  </ColorButton>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
