import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import './AllUsers..css';

function AllUsers() {

    const [id, setId] = useState(1);
    const [usersList, setUsersList] = useState([]);

    let totalPageCount;
    useEffect(() => {
        const getListOfUser = async() => {
            const response = await fetch(`https://reqres.in/api/users?page=${id}`);
            console.log(response);
            const data = await response.json();
            console.log(data);
            console.log(data.data);
            setUsersList(data.data);
            if(response.status === 200) {
                setUsersList(data.data)

                
                totalPageCount = data.total_pages;
            }
        }


        getListOfUser();
    }, [id])

    const handlePageIncrease = () => {
        if(id === totalPageCount) {
            return;
        }
        setId((prevState) => {
            return prevState + 1;
        });
        console.log("it works!")
    };

    const handlePageDecrease = () => {
        if (id === 1) {
          return;
        }
        setId((prevState) => {
          return prevState - 1;
        });
    };


    return (
      <>
        <Navbar />

        <section className="users-section">
          <h1 className="text-center p-4">List Of Users</h1>

          <div className="users-container">
            {usersList.map((user) => {
              return (
                <div className="user-card" key={user.id}>
                  <div className="user-imageContainer">
                    <img src={user.avatar} alt="user" className="user-img" />
                  </div>

                  <div className="user-details">
                    <div className="user-email">
                      <h6>Email</h6>
                      <p>{user.email}</p>
                    </div>
                    <div className="user-firstName">
                      <h6>First Name</h6>
                      <p>{user.first_name}</p>
                    </div>
                    <div className="user-lastName">
                      <h6>Last Name</h6>
                      <p>{user.last_name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="btn-container">
            <button type="button" onClick={handlePageDecrease}>Prev</button>
            <button type="button" onClick={handlePageIncrease}>Next</button>
          </div>
        </section>
      </>
    );
}

export default AllUsers