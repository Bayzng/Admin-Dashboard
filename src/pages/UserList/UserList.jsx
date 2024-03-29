import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from "@material-ui/icons"
import { userRows } from '../../chatData'
import { Link } from "react-router-dom"
import {useState} from "react"

const UserList = () => {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'user', headerName: 'Username', width: 200, renderCell: (params)=> {
        return (
            <div className="userListUser">
                <img className="userListImg" src={params.row.avater} alt="" />
                {params.row.username}
            </div>
        )
    } },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction volume',
      width: 160,
    },
    {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
            return(
                <>
                    <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
                </>  
            )
        }
    }
  ];

  return (
    <div className="userlist">
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 5 },
        //   },
        // }}
        pageSize={[7]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList