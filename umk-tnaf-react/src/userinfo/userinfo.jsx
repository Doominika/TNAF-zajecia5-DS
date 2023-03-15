import React from 'react';

const users = 
[
    { value: 'john1', label: 'John Doe', date: "12.01.1993", email: "johnek@gmail.com" },
    { value: 'john2', label: 'John Doe II', date: "02.02.2002", email: "bigcat@gmail.com"  },
    { value: 'bob', label: 'Bob Smith', date: "07.04.2000", email: "babyyoda@gmail.com"  }
]

const MyComponent = () => 
{
    const [selected, setSelected] = React.useState(0);
    const selectedUser = users.find(user => user.value === selected);

    const handlechange = (event) => {
        setSelected(event.target.value);
    } 


    return (
        <>
        <select value={selected} onChange={handlechange}> 
            <option value="0">Select user</option>
            { users.map(user => ( <option value={user.value}> {user.label} </option> ))}
        </select>
        {selectedUser && (
            <>
                <h1>
                    {selectedUser.label}
                </h1>

                <h4>
                    Date of birth: {selectedUser.date} <br/>
                    Email: {selectedUser.email}
                </h4>
            </>
        )}
        {
        }
        

        </>
    )
}
    


export default MyComponent;