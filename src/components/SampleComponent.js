import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getMockData } from '../utilities/mockData';
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';


const SampleComponent = () => {
  // This is the mock data to be fetched
  const [data, setMockData] = useState([]);
  const [lobOptions, setLobOptions] = useState([]);
  const [appShortOptions, setAppShortOptions] = useState([]);
  const [appNameOptions, setAppNameOptions] = useState([]);
  const [selectedLob, setSelectedLob] = useState('');
  const [selectedAppShort, setSelectedAppShort] = useState('');
  const [selectedAppName, setSelectedAppName] = useState('');
  const [filteredComponents, setFilteredComponents] = useState([]);
  const [appShortDisabled, setAppShortDisabled] = useState(true);
  const [appNameDisabled, setAppNameDisabled] = useState(true);

  // Here we fetch the data from url using axios or/mockdata
  useEffect(()=>{
    getMockData()
    .then((data)=>{
      console.log("fetched Data: ", data.data_set);
      setMockData(data.data_set);
    })
  },[])

  // Extracting unique values for LOB initially
  useEffect(() => {
    const lobSet = new Set();
    if(data.length > 0) {
      data.forEach(item => {
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

      if(data.length > 0) {
        data.forEach(item => {
          if (item.LOB === selectedLob) {
            appShortSet.add(item['App Short']);
            appNameSet.add(item['App Name']);
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
      setSelectedAppShort('');
      setSelectedAppName('');
    }
  }, [data,selectedLob]);

  // Filtering components based on selected values
  useEffect(() => {
    if (selectedLob && (selectedAppShort || selectedAppName)) {
      const filtered = data.filter(
        item =>
          item.LOB === selectedLob &&
          (item['App Short'] === selectedAppShort ||
          item['App Name'] === selectedAppName)
      );
      console.log("rows :",filtered);
      setFilteredComponents(filtered);
    }
  }, [data, selectedLob, selectedAppShort, selectedAppName]);

  // Define columns for DataGrid
  const columns = [
    { field: 'component_name', headerName: 'Component Name', flex: 1 },
    { field: 'archetypes_str', headerName: 'Archetypes', flex: 1 },
    { field: 'landing_zone_future_str', headerName: 'Landing Zone Future', flex: 1 },
    { field: 'blueprints_future_str', headerName: 'Blueprints Future', flex: 1 },
  ];

  return (
    <div style={{marginTop: '20px'}}>
     
      <FormControl>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={lobOptions}
        sx={{ width: 250, marginRight: 2,  marginBottom: 2}}
        onChange={(e, value) => setSelectedLob(value)}
        renderInput={(params) => <TextField {...params} label="Select LOB" />}
      />
      </FormControl>
      <FormControl>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={appShortOptions}
        sx={{ width: 170, marginRight: 2,  marginBottom: 2}}
        disabled={appShortDisabled}
        onChange={(e, value) => setSelectedAppShort(value)}
        renderInput={(params) => <TextField {...params} label="Select App Short" />}
      />
      </FormControl>
      <FormControl>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={appNameOptions}
        sx={{ width: 170 }}
        disabled={appShortDisabled}
        onChange={(e, value) => setSelectedAppName(value)}
        renderInput={(params) => <TextField {...params} label="Select App Name" />}
      />
      </FormControl>

      <div style={{ height: 400, width: '100%' }}>
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
