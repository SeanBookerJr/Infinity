import React, { useEffect } from 'react'
import DevNavBar from '../../components/DevNavBar'
import EditDevProfile from './EditDevProfile'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DeveloperProfile({setUser}) {
    const user = JSON.parse(localStorage.getItem("user"))

    let navigate = useNavigate()
    
    function handleLogout(e) {
        fetch('/logout', {
          method: 'DELETE'
        })
        setUser({})
        navigate('/')
    }

    const [manFirst, setManFirst] = useState([])
    const [manLast, setManLast] = useState([])

    useEffect(() => {
     setManFirst(user.manager.first_name)
     setManLast(user.manager.last_name)
    }, [])
    

  return (
    <div>
        <DevNavBar />
        <div className="row mt-5"> 
             <div className="col-lg-4 mx-auto pt-5">
                 <div className="card mb-4"> 
                     <div className="card-body text-center"> 
                        <h5 className="my-3"><strong>{user.first_name} {user.last_name}</strong></h5>
                        <p className="text-muted mb-1">{user.account_type}</p>
                        <div className='row'>
                        <EditDevProfile user={user} />
                        <button className='btn btn-outline-primary mx-auto mt-3' style={{width: 100}} onClick={handleLogout}>Logout</button>
                        </div>
                        <div className="d-flex justify-content-center mb-2">

                        </div>
                     </div>
                 </div>
             </div>
        </div>
        <div className="col-lg-8 mx-auto " style={{width: 460}}> 
             <div className="card mb-4 ">
                     <div className="card-body"> 
                     <ul className="list-group list-group-flush">
                          
                            <p className="list-group-item pb-4"><strong>Full Name :</strong> {user.first_name} {user.last_name} </p>

                             <p className="list-group-item pb-4"><strong>Email :</strong> {user.email}</p>
                                    
                             <p className="list-group-item pb-4"><strong>Username :</strong> {user.username}</p>

                             <p className="list-group-item pb-4"><strong>Account Type :</strong> {user.account_type}</p>

                             <p className="list-group-item pb-4"><strong>Your Manager :</strong> {manFirst} {manLast}</p>

                        </ul>
                 </div>
                                 
             </div>
         </div>
     </div>
  )
}

export default DeveloperProfile