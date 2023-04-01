import React from 'react'

function UserList({ users }: any) {
    return (
        <>
            <div>List of user</div>{
                users.map((user: any) => {
                    return (
                        <div key={user.id}>
                          <p>{user.name}</p>
                          <p>{user.email}</p>
                        </div>
                    )
                })
            }
        </>

    )
}
export default UserList;

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return {
        props: {
            users: data
        }
    }
}