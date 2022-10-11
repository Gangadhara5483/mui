import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import jsPDF from "jspdf";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

import ActionMenu from "./ActiomMenu";

import RolesAction from "./RolesAction";
import { columns, rows } from "./Constants";
import { ArrowDropDown } from "@mui/icons-material";

const styles = (theme) => ({
  activeSortIcon: {
    opacity: 1,
    color: "blue",
  },
  inactiveSortIcon: {
    opacity: 0.4,
    color: "green",
  },
});

export default function DataTable({
  searchValue,
  filteredValue,
  isPdfExported,
  filterByColumn,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [startPage, setStartPage] = React.useState(0);
  const [tableColumns, setTableColumns] = React.useState();
  const [tableRows, setTableRows] = React.useState();
  const [paginationData, setPaginationData] = React.useState({
    page: 1,
    totalRecords: rows.length,
    perPage: 7,
    totalPages: Math.ceil(rows.length / 7),
  });
  console.log(filteredValue);
  const updateRows = () => {
    let newArr = [...rows];
    newArr = newArr.slice(
      (paginationData.page - 1) * 7,
      paginationData.page * 7
    );
    setTableRows(newArr);
  };
  React.useEffect(() => {
    //
    if (tableRows) {
      updateRows();
    }
  }, [paginationData]);
  React.useEffect(() => {
    setTableColumns(columns);
    updateRows();
  }, []);
  React.useEffect(() => {
    if (tableRows) {
      let filterData = rows.filter((item) =>
        item.Name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
      filterData = filterData.slice(
        (paginationData.page - 1) * 5,
        paginationData.page * 5
      );
      // setTableRows(newArr);
      setTableRows(filterData);
    }
  }, [searchValue]);

  React.useEffect(() => {
    updateRows();
  }, [filteredValue]);

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(6);

    const title = "My Awesome Report";
    const headers = [
      [
        "Name",
        "RoleType",
        "EmailId",
        "AccessRight",
        "CreatedBy",
        "CreatedOn",
        "Action",
      ],
    ];

    const data = tableRows.map((item) => [
      item.Name,
      item.RoleType,
      item.EmailId,
      item.AccessRight,
      item.CreatedBy,
      item.CreatedOn,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 50);
    doc.table(content);
    doc.save("list_of_admin.pdf");
  };
  React.useEffect(() => {
    if (isPdfExported) {
      exportPDF();
    }
  }, [isPdfExported]);

  const renderRows = (startPage, rowsPerPage) => {
    if (tableRows) {
      setTableRows(rows.slice(startPage, rowsPerPage));
      setRowsPerPage(rowsPerPage);
    }
  };

  const handlePreviousPage = () => {
    if (paginationData.page > 1) {
      setPaginationData({
        ...paginationData,
        page: paginationData.page - 1,
      });
    }
  };
  const handleNextPage = () => {
    if (paginationData.page < paginationData.totalPages) {
      setPaginationData({
        ...paginationData,
        page: paginationData.page + 1,
      });
    }
  };

  React.useEffect(() => {
    if (filterByColumn) {
      let newRows = [...rows];
      let newColumns = [...columns];
      if (filterByColumn === "Name") {
        newColumns = columns.filter(
          (item) => item.field === "image" || item.field === filterByColumn
        );
        newRows = rows.filter((item) => ({
          [filterByColumn]: item[filterByColumn],
          image: item.image,
        }));
      } else if (filterByColumn === "All") {
        newRows = newRows;
        newColumns = newColumns;
      } else {
        newColumns = columns.filter((item) => item.field === filterByColumn);
        newRows = rows.filter((item) => ({
          [filterByColumn]: item[filterByColumn],
        }));
      }
      setTableColumns(newColumns);
      setTableRows(newRows);
      console.log(filterByColumn);
      // newArr = newArr.map(item => ({[filterByColumn]: item[filterByColumn]}));
      // setTableRows(newArr);
    }
  }, [filterByColumn]);
 const [sortModel, setSortModel] = React.useState([
  {
    field:"commodity",
    sort:"asc"
  }
 ])
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        ColumnFilteredIcon={<button>sort</button>}
        rows={tableRows ? tableRows : []}
        columns={tableColumns ? tableColumns : []}
        sortModel ={sortModel}
        components={{

          ColumnUnsortedIcon: ArrowDropDownIcon

        }}
        onSortModelChanged = {(model)=>setSortModel(model)}
       
        classes={{
          columnHeaders: "admin-table-columns-headers",
          virtualScroller: "admin-table-virtualScroller",
          footerContainer: "admin-table-footerContainer",
        }}
        filterModel={{
          items: filteredValue,
        }}
        sx={{
          border: "none",
          // "&.MuiDataGrid-root .MuiDataGrid-columnHeader .MuiDataGrid-iconButtonContainer": {
          //  // display: 'none',
          //  width: "auto",
          //  visibility: "visible"
          // },
          // "& .MuiDataGrid-root .MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader--sorted) .MuiDataGrid-sortIcon": {
          //   opacity: 0.5
          // },
        }}
      />

      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Box className="total">
          Total: {paginationData.totalRecords} Records
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box>Your on page</Box>
          <Box
            sx={{
              display: "flex",
              border: "1px solid #0000000f",
              padding: "0px 2px 0px 5px",
              height: "20px",
              width: "31px",
              textAlign: "center",
              marginLeft: "5px",
              marginRight: "10px",
              backgroundColor: "#f5f5f52b",
            }}
          >
            <Box>{paginationData.page}</Box>{" "}
            <Box>
              <KeyboardArrowDownIcon />
            </Box>
          </Box>
          <Box>of {paginationData.totalPages} pages</Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              marginRight: "18px",
              border: "1px solid #67666626",
              padding: "4px",
              width: "77px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#f5f5f530",
              cursor: "default",
            }}
          >
            <Box>
              <KeyboardArrowLeftIcon />
            </Box>
            <Box sx={{ paddingRight: "12px" }} onClick={handlePreviousPage}>
              {" "}
              Previous
            </Box>
          </Box>
          <Box
            sx={{
              marginRight: "18px",
              border: "1px solid #67666626",
              padding: "4px",
              width: "77px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#f5f5f530",
              cursor: "default",
            }}
          >
            <Box onClick={handleNextPage}>Next</Box>
            <Box>
              {" "}
              <KeyboardArrowRightIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
