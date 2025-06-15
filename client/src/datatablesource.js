export const userColumns = [
    { 
        field: "id", 
        headerName: "ID", 
        width: 70 
    },
    {
        field: "user",
        headerName:"User", 
        width: 230, 
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="Avatar"/>
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "E-mail",
        width: 230
    },
    {
        field: "age",
        headerName: "Age",
        width: 70
    },
    {
        field: "status",
        headerName: "Status",
        width: 100,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`} >
                    {params.row.status}
                </div>
            );
        },
    },
];

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "active",
        email: "isnow@gmail.com",
        age: 35
    },
    {
        id: 2,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "pending",
        email: "isnow@gmail.com",
        age: 35
    },
    {
        id: 3,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "active",
        email: "isnow@gmail.com",
        age: 35
    },
    {
        id: 4,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "active",
        email: "isnow@gmail.com",
        age: 35
    },
    {
        id: 5,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "active",
        email: "isnow@gmail.com",
        age: 35
    },
    {
        id: 6,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "active",
        email: "isnow@gmail.com",
        age: 35
    },
    {
        id: 7,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "pending",
        email: "isnow@gmail.com",
        age: 35
    },
    {
        id: 8,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "active",
        email: "isnow@gmail.com",
        age: 35
    },
    {
        id: 9,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "active",
        email: "isnow@gmail.com",
        age: 35
    },
    {
        id: 10,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "active",
        email: "isnow@gmail.com",
        age: 35
    },
    {
        id: 11,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "active",
        email: "isnow@gmail.com",
        age: 35
    },
    {
        id: 12,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "pending",
        email: "isnow@gmail.com",
        age: 35
    },
    {
        id: 13,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "active",
        email: "isnow@gmail.com",
        age: 35
    },
    {
        id: 14,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "active",
        email: "isnow@gmail.com",
        age: 35
    },
    {
        id: 15,
        username: "Snow",
        img: "https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png",
        status: "active",
        email: "isnow@gmail.com",
        age: 35
    }

]