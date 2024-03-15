import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import { useTable } from 'react-table';

const TodoListApp = () => {
    const [items, setItems] = useState([]);
    const [option, setOption] = useState('');
    const [dataToShow, setDataToShow] = useState([]);

    const apiUrl = "https://jsonplaceholder.typicode.com/todos";

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setDataToShow(renderItems());
    }, [option, items]);

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleOptionChange = (e) => {
        setOption(e.target.value);
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Title',
                accessor: 'title',
            },
            {
                Header: 'UserID',
                accessor: 'userId',
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: dataToShow });

    const renderItems = () => {
        switch (option) {
            case '1':
                return items.map(item => ({
                    id: item.id
                }));
            case '2':
                return items.map(item => ({
                    id: item.id,
                    title: item.title
                }));
            case '3':
                return items.filter(item => !item.completed).map(item => ({
                    id: item.id,
                    title: item.title
                }));
            case '4':
                return items.filter(item => item.completed).map(item => ({
                    id: item.id,
                    title: item.title
                }));
            case '5':
                return items.map(item => ({
                    id: item.id,
                    userId: item.userId
                }));
            case '6':
                return items.filter(item => item.completed).map(item => ({
                    id: item.id,
                    userId: item.userId
                }));
            case '7':
                return items.filter(item => !item.completed).map(item => ({
                    id: item.id,
                    userId: item.userId
                }));
            default:
                return [];
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Todo List App</h1>
            <select value={option} onChange={handleOptionChange}>
                <option value="">Select an option</option>
                <option value="1">List all pending items (IDs only)</option>
                <option value="2">List all pending items (IDs and title)</option>
                <option value="3">List all unresolved pending items (ID and title)</option>
                <option value="4">List all resolved pending items (ID and title)</option>
                <option value="5">List all pending items (IDs and userId)</option>
                <option value="6">List all resolved pending items (ID and userID)</option>
                <option value="7">List all unresolved pending items (ID and userID)</option>
            </select>
            <div style={{ overflowY: "auto", maxHeight: "400px" }}>
                <table {...getTableProps()} style={{ margin: "auto", borderCollapse: "collapse", width: "80%", minWidth: "600px" }}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoListApp;

