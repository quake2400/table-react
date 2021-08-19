import './Home.scss';
import { DataGrid } from '@material-ui/data-grid';
import { useApi } from '../data';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState(useApi);

  console.log(data);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
    },
    {
      field: 'species',
      headerName: 'Species',
      width: 200,
    },
    {
      field: 'gender',
      headerName: 'gender',
      width: 200,
    },
    {
      field: 'origin',
      headerName: 'Origin',
      width: 200,
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 200,
    },
    {
      field: 'created',
      headerName: 'Created',
      width: 200,
    },
  ];
  return (
    <div className="homeList">
      <DataGrid rows={data} columns={columns} />
    </div>
  );
}
