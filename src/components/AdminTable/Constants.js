import { Stack, Typography } from "@mui/material";
import React from "react";
import ActionMenu from "./ActiomMenu";
import RolesAction from "./RolesAction";
const columns = [
    // {
    //   field: "image",
    //   headerName: "",
    //   width: -5,
    //   renderCell: (params) => (
    //     <img src={params.value} width="30px" style={{ borderRadius: "50%" }} />
    //   ),
    // },
    {
      field: "Name",
      headerName: "Name",
      width: 100,
      renderCell: (params) => (
       <Stack direction='row' spacing={2}>
        <Typography> <img src={params.value.imgurl} width="30px" style={{ borderRadius: "50%" }} /></Typography>
        <Typography >{params.value.name}</Typography>

       </Stack>

      ),
    },
    {
      field: "RoleType",
      headerName: "Role Type",
      width: 120,
      renderCell: (params) => (
        <Stack><RolesAction name={params} Role1="Role1" Role2="Role2" /></Stack>
      ),
    },
    {
      field: "EmailId",
      headerName: "EmailId",
      width: 150,
      color: "gold",
    },
    {
      field: "AccessRight",
      headerName: "AccessRight",
      width: 140,
      renderCell: (params) => (
        <Stack><RolesAction
        name={params}
        Role1="Role1-Read & write"
        Role2="Role2-Read only"
      /></Stack>
      ),
    },
    {
      field: "CreatedBy",
      headerName: "CreatedBy",
      width: 120,
    },
    {
      field: "CreatedOn",
      headerName: "CreatedOn",
      width: 120,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => <ActionMenu />,
    },
  ];
  
  const rows = [
    {
      id: 1,
         Name: {imgurl:"https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg",
        name:"John"},
      RoleType: "role 1",
      EmailId: "abc@gmail.com",
      AccessRight: "2 rights",
      CreatedBy: "Gangadhar",
      CreatedOn: "27/08/2022",
      Action: "...",
    },
    {
        id: 1,
           Name: {imgurl:"https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg",
          name:"John"},
        RoleType: "role 1",
        EmailId: "abc@gmail.com",
        AccessRight: "2 rights",
        CreatedBy: "Gangadhar",
        CreatedOn: "27/08/2022",
        Action: "...",
      },
      {
        id: 1,
           Name: {imgurl:"https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg",
          name:"John"},
        RoleType: "role 1",
        EmailId: "abc@gmail.com",
        AccessRight: "2 rights",
        CreatedBy: "Gangadhar",
        CreatedOn: "27/08/2022",
        Action: "...",
      },
      {
        id: 1,
           Name: {imgurl:"https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg",
          name:"John"},
        RoleType: "role 1",
        EmailId: "abc@gmail.com",
        AccessRight: "2 rights",
        CreatedBy: "Gangadhar",
        CreatedOn: "27/08/2022",
        Action: "...",
      },
      {
        id: 1,
           Name: {imgurl:"https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg",
          name:"John"},
        RoleType: "role 1",
        EmailId: "abc@gmail.com",
        AccessRight: "2 rights",
        CreatedBy: "Gangadhar",
        CreatedOn: "27/08/2022",
        Action: "...",
      },
      {
        id: 1,
           Name: {imgurl:"https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg",
          name:"John"},
        RoleType: "role 1",
        EmailId: "abc@gmail.com",
        AccessRight: "2 rights",
        CreatedBy: "Gangadhar",
        CreatedOn: "27/08/2022",
        Action: "...",
      },
  ];

  export {
    columns, rows
  }