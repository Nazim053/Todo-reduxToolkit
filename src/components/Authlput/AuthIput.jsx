import React from "react";
import {addUsers} from '../../store/userSlice'
import { useState } from "react";
import { useDispatch } from "react-redux";


export default function AuthInput () {

    const [user, setUser] = useState("");
    const dispatch = useDispatch();



    const addUser = () => {
        dispatch(addUsers({user}))
        }
      

    return (

        <div className="container">
        <input
          className="inputPost"
          onChange={(e) => setUser(e.target.value)}
          placeholder="Введите ваше имя"
        />
        <button className="buttonPost" onClick={addUser}>Отправить данные</button>
      </div>
    )
}