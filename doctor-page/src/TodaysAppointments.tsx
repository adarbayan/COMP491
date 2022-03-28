import * as React from "react";
import { Grid } from "@mui/material";
import PatientHolder from "./PatientHolder";
import HeaderContainer from "./HeaderContainer";

import "./App.css";

interface Props {
  patientName1: string;
  patientName2: string;
  patientName3: string;
  patientName4: string;
  patientName5: string;
  patientName6: string;
  patientName7: string;
  patientName8: string;
}

const TodaysAppointments: React.FC<Props> = (props) => {
  return (
    <div className="box-shadow">
      <HeaderContainer title="Bugünün Randevuları" />
      <Grid
        container
        item
        direction="column"
        height="550px"
        style={{
          padding: "40px",
        }}
      >
        <PatientHolder
          patientName={props.patientName1}
          hour="08:30"
        ></PatientHolder>
        <PatientHolder
          patientName={props.patientName2}
          hour="09:30"
        ></PatientHolder>
        <PatientHolder
          patientName={props.patientName3}
          hour="10:30"
        ></PatientHolder>
        <PatientHolder
          patientName={props.patientName4}
          hour="11:30"
        ></PatientHolder>
        <PatientHolder patientName="Öğle Arası" hour="12:30"></PatientHolder>
        <PatientHolder
          patientName={props.patientName5}
          hour="13:30"
        ></PatientHolder>
        <PatientHolder
          patientName={props.patientName6}
          hour="14:30"
        ></PatientHolder>
        <PatientHolder
          patientName={props.patientName7}
          hour="15:30"
        ></PatientHolder>
        <PatientHolder
          patientName={props.patientName8}
          hour="16:30"
        ></PatientHolder>
      </Grid>
    </div>
  );
};

export default TodaysAppointments;
