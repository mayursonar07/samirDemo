import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getMockData } from "../utilities/mockData";
import { Autocomplete, FormControl, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import EditIcon from '@mui/icons-material/Edit';
import UpdateIcon from '@mui/icons-material/Update';
import axios from "axios";
// or
//import { TextField } from '@mui/material';

const SampleComponent = () => {
  // This is the mock data to be fetched
  const [data, setMockData] = useState([]);
  const [columnValueOptions, setColumnValueOptions] = useState({});
  const [lobOptions, setLobOptions] = useState([]);
  const [appShortOptions, setAppShortOptions] = useState([]);
  const [appNameOptions, setAppNameOptions] = useState([]);
  const [selectedLob, setSelectedLob] = useState("");
  const [selectedAppShort, setSelectedAppShort] = useState("");
  const [selectedAppName, setSelectedAppName] = useState("");
  const [filteredComponents, setFilteredComponents] = useState([]);
  const [appShortDisabled, setAppShortDisabled] = useState(true);
  const [appNameDisabled, setAppNameDisabled] = useState(true);
  const [editCell, setEditCell] = useState(null);
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);

  // Here we fetch the data from url using axios or/mockdata
  useEffect(() => {
    getMockData().then((data) => {
      console.log("fetched Data: ", data.data_set);
      setMockData(data.data_set);
      setColumnValueOptions({
        archetypes_str: data.archetypes_str,
        landing_zone_future_str: data.landing_zone_future_str,
        blueprints_future_str: data.blueprints_future_str
      })
    });
  }, []);

  // Extracting unique values for LOB initially
  useEffect(() => {
    const lobSet = new Set();
    if (data.length > 0) {
      data.forEach((item) => {
        lobSet.add(item.LOB);
      });
    }
    setLobOptions(Array.from(lobSet));
  }, [data]);

  // Extracting unique values for App Short and App Name when LOB is selected
  useEffect(() => {
    if (selectedLob) {
      const appShortSet = new Set();
      const appNameSet = new Set();

      if (data.length > 0) {
        data.forEach((item) => {
          if (item.LOB === selectedLob) {
            appShortSet.add(item["App Short"]);
            appNameSet.add(item["App Name"]);
          }
        });
      }

      setAppShortOptions(Array.from(appShortSet));
      setAppNameOptions(Array.from(appNameSet));
      setAppShortDisabled(false);
      setAppNameDisabled(false);
    } else {
      setAppShortDisabled(true);
      setAppNameDisabled(true);
      setSelectedAppShort("");
      setSelectedAppName("");
    }
  }, [data, selectedLob]);

  // Filtering components based on selected values
  useEffect(() => {
    if (selectedLob && (selectedAppShort || selectedAppName)) {
      const filtered = data.filter(
        (item) =>
          item.LOB === selectedLob &&
          (item["App Short"] === selectedAppShort ||
            item["App Name"] === selectedAppName)
      );
      console.log("rows :", filtered);
      setFilteredComponents(filtered);
    }
  }, [data, selectedLob, selectedAppShort, selectedAppName]);

  // Handle cell edit button click
  // Handle cell edit button click
  const handleCellEditClick = (id, field, value) => {
    setEditCell({
      id: id,
      field: field,
      value: value
    });
    // Extracting all possible values for the selected column    
    const columnValues = columnValueOptions[field];
    console.log("columnValues :", columnValues);
    setAutocompleteOptions(Array.from(new Set(columnValues)));
  };
    // Handle AutoComplete change
    const handleAutocompleteChange = (newValue) => {

      console.log('======= Cell edited ======');
      console.log(' Below are the details of edited cell ..');
      console.log(" New value ",newValue);
      console.log(" edited cell details: ", editCell);
      console.log(' ==== Here you may call the webservice to update the value in DB ======');

      // Call patch'
      //const updateVal = {editCell?.field}
     // axios.patch(`http://localhost:8080/data_set/${editCell.id}`, {editCell.field: newValue})

     // Update the data in the db.json file using Axios
      const updateUrl = `http://localhost:8080/data_set/${editCell.id}`;
      const updateField = { [editCell.field]: newValue };
      axios.patch(updateUrl, updateField)
      .then(response => {
        console.log("Data updated successfully:", response.data);
      })
      .catch(error => {
        console.error("Error updating data:", error);
      });

      setFilteredComponents(filteredComponents.map(row => {
        if (row.id === editCell.id) {
          return { ...row, [editCell.field]: newValue };
        }
        return row;
      }));
    };
  
    // Handle AutoComplete close
    const handleAutocompleteClose = () => {
      setEditCell(null);
    };

   // Define columns for DataGrid
  const columns = [
    { field: 'component_name', headerName: 'Component Name', flex: 1},
    { field: 'archetypes_str', headerName: 'Archetypes', flex: 1, renderCell: (params) => (
      <>
        {params.id === editCell?.id && params.field === editCell?.field ? (
          <Autocomplete
            sx={{ width: '100%' }}
            options={autocompleteOptions}
            value={params.value}
            onChange={(event, newValue) => {
              if(newValue === null) newValue = params.value
              handleAutocompleteChange(newValue)}
            }
            onClose={handleAutocompleteClose}
            renderInput={(params) => <TextField {...params} />}
          />
        ) : (
          <>
            {params.value}
            <IconButton onClick={() => handleCellEditClick(params.row.id, 'archetypes_str', params.value)}>
              {params.id === editCell?.id && params.field === editCell?.field ? <UpdateIcon /> : <EditIcon />}
            </IconButton>
          </>
        )}
      </>
    )},
    { field: 'landing_zone_future_str', headerName: 'Landing Zone Future', flex: 1, renderCell: (params) => (
      <>
        {params.id === editCell?.id && params.field === editCell?.field ? (
          <Autocomplete
            sx={{ width: '100%' }}
            options={autocompleteOptions}
            value={params.value}
            onChange={(event, newValue) => {
              if(newValue === null) newValue = params.value
              handleAutocompleteChange(newValue)}
            }
            onClose={handleAutocompleteClose}
            renderInput={(params) => <TextField {...params} />}
          />
        ) : (
          <>
            {params.value}
            <IconButton onClick={() => handleCellEditClick(params.row.id, 'landing_zone_future_str', params.value)}>
              {params.id === editCell?.id && params.field === editCell?.field ? <UpdateIcon /> : <EditIcon />}
            </IconButton>
          </>
        )}
      </>
    )},
    { field: 'blueprints_future_str', headerName: 'Blueprints Future', flex: 1, renderCell: (params) => (
      <>
        {params.id === editCell?.id && params.field === editCell?.field ? (
          <Autocomplete
            sx={{ width: '100%' }}
            options={autocompleteOptions}
            value={params.value}
            onChange={(event, newValue) => {
              if(newValue === null) newValue = params.value
              handleAutocompleteChange(newValue)}
            }
            onClose={handleAutocompleteClose}
            renderInput={(params) => <TextField {...params} />}
          />
        ) : (
          <>
            {params.value}
            <IconButton onClick={() => handleCellEditClick(params.row.id, 'blueprints_future_str', params.value)}>
              {params.id === editCell?.id && params.field === editCell?.field ? <UpdateIcon /> : <EditIcon />}
            </IconButton>
          </>
        )}
      </>
    )},
  ];


  return (
    <div style={{ marginTop: "20px" }}>
      <FormControl>
        <Autocomplete
          disablePortal
          id="lob"
          options={lobOptions}
          sx={{ width: 250, marginRight: 2, marginBottom: 2 }}
          onChange={(e, value) => setSelectedLob(value)}
          renderInput={(params) => <TextField {...params} label="Select LOB" />}
        />
      </FormControl>
      <FormControl>
        <Autocomplete
          disablePortal
          id="appShort"
          options={appShortOptions}
          sx={{ width: 170, marginRight: 2, marginBottom: 2 }}
          disabled={appShortDisabled}
          onChange={(e, value) => setSelectedAppShort(value)}
          renderInput={(params) => (
            <TextField {...params} label="Select App Short" />
          )}
        />
      </FormControl>
      <FormControl>
        <Autocomplete
          disablePortal
          id="appName"
          options={appNameOptions}
          sx={{ width: 170 }}
          disabled={appNameDisabled}
          onChange={(e, value) => setSelectedAppName(value)}
          renderInput={(params) => (
            <TextField {...params} label="Select App Name" />
          )}
        />
      </FormControl>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={filteredComponents}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
      
    </div>
  );
};

export default SampleComponent;
