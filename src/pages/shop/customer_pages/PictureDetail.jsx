import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Alert, FormControl, MenuItem, Paper, Breadcrumbs, TextField, 
         Box, Grid, Typography, 
       } from "@mui/material";
import { collection, onSnapshot, query, doc, addDoc, serverTimestamp,  } from "firebase/firestore";
import { db, storage } from "../../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage";
import isEmail from "validator/lib/isEmail";
import useStyles from '../../../styles/shop_style';
import { ColorButton, OutlinedButton, UploadButton, StyledTextField } from "../../../styles/customized_components";
import { useDispatch } from 'react-redux';
import { pageBackdrop, percentCounter } from '../../../actions/actions';
import LoadingNotification from "../../../components/loading_notification";

export default function UploadForm() {
  let navigate = useNavigate();

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      to="/"
    >
      HOME
    </Link>,
    <Link underline="hover" key="2" color="inherit" to="/shop">
      PICTURES
    </Link>,
    <p key="3">PICTURE NAME</p>,
  ];
  const [pic, setPic] = useState("");
  const { id } = useParams();
  const [schools, setSchools] = useState([]);
  const [sschool, setSschool] = useState("");
  const [showSschool, setShowSschool] = useState(false);
  const [playername, setPlayername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const classes = useStyles();
  const [wa, setWa] = useState(false);
  const [isValid, setIsValid] = useState(false); //email validate
  const [dirty, setDirty] = useState(false);
  const [ activeTypeButton, setActiveTypeButton ] = useState(false);
  const [ activeQualityButton, setActiveQualityButton ] = useState(false);
  // const [ showNotification, setShowNotification ] = useState(false);
  // const [ disable, setDisable ] = useState(false);
  const [imageurl, setImageurl] = useState("");
  const [signurl, setSignurl] = useState("");
  const [ type, setType ] = useState('');
  const [ quality, setQuality ] = useState('');
  const handleDispatch = useDispatch();
  const [sign, setSign] = useState("");

  useEffect(() => {
    const q = query(doc(collection(db, "pictures"), id));
    onSnapshot(q, (s) => {
      setPic(s.data());
    });
  }, [id]);

  useEffect(() => {
    onSnapshot(collection(db, "schools"), (snap) => {
      setSchools(
        snap.docs.map((e) => ({
          id: e.id,
          item: e.data(),
        }))
      );
    });
  }, []);


  const checkValues = function () {
    if (
      sschool !== "" &&
      type !== "" &&
      quality !== "" &&
      playername !== "" &&
      email !== "" &&
      image !== "" &&
      isValid === true
    )
      return true;
    else {
      setWa(true);
      return false;
    }
  };
  
  const addData = function () {
    
    handleDispatch(pageBackdrop(true));
    const sotrageRef1 = ref(storage, `/playerimages/${id}_${image.name}`);
    const uploadTask1 = uploadBytesResumable(sotrageRef1, image);

    uploadTask1.on(
      "state_changed",
      (snapshot) => {
      },
      (err) => console.log(err),
      () => {
          // download url
          getDownloadURL(uploadTask1.snapshot.ref).then((url) => {
              setImageurl(url);

          });
      }
    );

    if (sign === '') {
        setSignurl('--');
        return;
    }

    const sotrageRef2 = ref(storage, `/playersignature/${id}_${sign.name}`);
    const uploadTask2 = uploadBytesResumable(sotrageRef2, sign);

    uploadTask2.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        handleDispatch(percentCounter(Number(percent)));        
      },
      (err) => console.log(err),
      () => {
          // download url
          getDownloadURL(uploadTask2.snapshot.ref).then((url) => {
              setSignurl(url);

          });
      }
    );

}

useEffect(() => {
  if (imageurl !== "" && signurl !== "") {
    handleDispatch(pageBackdrop(false));
      addDoc(collection(db, "orders"), {
        picname: pic.name,
        picid: id,
        picprice: pic.price,
        school: sschool,
        file_type : type,
        file_quality: quality,
        playername: playername,
        email: email,
        image: image.name,
        imageurl: imageurl,
        timestamp: serverTimestamp(),
      });
      navigate("/shop/submit");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [imageurl, signurl]);

const onHandleImages = (data) => {
  if (data === "digital") {
    setActiveTypeButton (data);
    setType(data);
  }
  if (data === "web" || data === "print") {
    setActiveQualityButton(data);
    setQuality(data);
  }
}

  return (
    <div
      className="container mx-auto max-w-screen-md mb-10"
      style={{ paddingTop: 70 }}
    >
      <Breadcrumbs
        separator="???"
        aria-label="breadcrumb"
        style={{ fontSize: "12px", margin: "5px 50px" }}
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
            <h5 className="h5 ml-10">{pic.name}</h5>
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
              </div>
            </div>
          </Grid>
          <Grid item xs={3} sm={3} md={6}>
            <Paper variant="outlined">
              <Box width="100%" padding={3}>
                <FormControl fullWidth>
                  <TextField fullWidth type="search" label="Select School" required value={sschool} onChange={(e) => setSschool(e.target.value)} onFocus={() => setShowSschool(true)} onBlur={() => setShowSschool(false)} />
                  {showSschool && 
                    <Box position="absolute" width="100%" zIndex="9999" top="60px">
                      <Paper elevation={6} sx={{maxHeight: "300px", overflowY: "auto"}} >
                      {
                        schools.filter(e => e.item.name.toLowerCase().includes(sschool.toLowerCase())).map((e, i) => (
                          <MenuItem value={e.item.name} key={i} onMouseDown={() => setSschool(e.item.name)}>
                            {e.item.name}
                          </MenuItem>
                        ))
                      }
                      </Paper>
                    </Box>
                  }
                </FormControl>
                <Box mt={1} mb={2}>
                  <Paper variant="outlined">
                    <Box padding={1}>
                      <Box display="flex" justifyContent="center" mb={1}>
                        <Typography variant="subtitle1">Type*</Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between" px={1}>
                        <OutlinedButton 
                          variant="outlined" 
                          id="digital"
                          onChange={(e)=>setType(e.target.id)} 
                          onClick={(e)=>onHandleImages(e.target.id)}
                          className={ activeTypeButton === "digital" ? classes.activeFormButton : classes.formButton}
                          sx={{ mr: 3 }} 
                        >
                          Digital File
                        </OutlinedButton>
                        <OutlinedButton 
                          disabled
                          variant="outlined"
                          id="plaque" 
                          sx={{ position: 'relative' }}
                          onChange={(e)=>setType(e.target.id)} 
                          onClick={(e)=>onHandleImages(e.target.id)}
                          className={ activeTypeButton === "plaque" ? classes.activeFormButton : classes.formButton}
                        >
                          Plaque
                          <div><div className="popper" id="popper">COMING SOON</div></div>
                          {/* {showNotification && ( <div><div className="popper" id="popper">COMING SOON</div></div> )} */}
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
                        <OutlinedButton 
                          variant="outlined" 
                          sx={{ mr: 3 }}
                          id="web" 
                          onChange={(e)=>setQuality(e.target.id)} 
                          onClick={(e)=>onHandleImages(e.target.id)}
                          className={ activeQualityButton === "web" ? classes.activeFormButton : classes.formButton}
                        >
                          Web
                        </OutlinedButton>
                        <OutlinedButton 
                          variant="outlined"
                          id="print" 
                          onChange={(e)=>setQuality(e.target.id)} 
                          onClick={(e)=>onHandleImages(e.target.id)}
                          className={ activeQualityButton === "print" ? classes.activeFormButton : classes.formButton}
                        >
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
                <Box mb={2}>
                  <Box mb={1}>
                    <UploadButton
                      variant="contained"
                      fullWidth
                      component="label"
                    >
                      {image !== "" ? image.name : "Upload Player Image*"}
                      <input
                        multiple
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={(e) => {
                          setImage(e.target.files[0]);
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
                          placeholder="Enter Email"
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
                  <Alert
                    severity="warning"
                    style={{ display: wa ? "flex" : "none" }}
                    className="mb-5"
                  >
                    Please fill all <span style={{ color: "red" }}>*</span>{" "}
                    fileds
                  </Alert>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <LoadingNotification />
    </div>
  );
}
