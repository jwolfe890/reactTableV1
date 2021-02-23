export const COLUMNS = [
    {
        Header: 'id',
        accessor: 'id'
    },
    {
        Header: 'First Name',
        accessor: 'first_name'
    },
    {
        Header: 'Last Name',
        accessor: 'last_name'
    },
    {
        Header: 'Date of Birth',
        accessor: 'data_of_birth'
    },
    {
        Header: 'Country',
        accessor: 'Country'
    },
    {
        Header: 'Phone',
        accessor: 'phone'
    }
]

export const GROUPED_COLUMNS = [
    {
        Header: 'id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                accessor: 'last_name'
            },
        ]
        },
            {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Date of Birth',
                accessor: 'data_of_birth'
            },
            {
                Header: 'Country',
                accessor: 'Country'
            },
            {
                Header: 'Phone',
                accessor: 'phone'
            }
        ]
    }
]