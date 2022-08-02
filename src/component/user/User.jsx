import React, { useState } from 'react'
import "./user.css"
import {Link} from "react-router-dom"
import { userData } from "../../clintdetails"
import { DataGrid} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';






export default function User() {
    const handledelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    const [data, setData] = useState(userData)



    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'username', headerName: 'First name', width: 200, renderCell: (params) => {
                return (
                    <div className="userlistsingle">
                        <img src={params.row.img} alt="" className="userimg" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'number',
            headerName: 'Number',
            width: 130,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 190,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                return (
                    <>   <Link to={"/user/" +params.row.id}>
                        <button className="useredit">Edit</button>
                         </Link>

                        <DeleteOutlineIcon className='deletebtn' onClick={() => handledelete(params.row.id)} />

                    </>
                )
            }
        },

    ];
    return (
        <div className='user'>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}
