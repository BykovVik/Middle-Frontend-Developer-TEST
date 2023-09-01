import React from "react";
import './TodoList.css'
import http from '../../http-common'
import add from './add_bold.png'
import avatar from './Avatar.png'

const TodoList = () => {

    //const nameDuplication = await http.get('/api/get-user-by-name', { params: { name: formData.name } });
        
    return(
        <div className="TodoListWrapper">
            <div className="card">
                <div className="TopLine">
                    <p className="green">Today</p>
                    <div><img src={add} /><p>2</p></div>
                </div>
                <div className="Todo">
                    <div className="TodoTitle">
                        <input type="checkbox"></input>
                        <h3>Title</h3>
                    </div>
                    <div className="TodoDate">
                        <p className="green">09/23/2000</p>
                        <p className="green">09/23/2000</p>
                    </div>
                    <div className="TodoDescription">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quis odit, sunt pariatur aperiam cum. Minima sed placeat corrupti natus quis. Harum, provident minus? Recusandae iure quasi voluptas nostrum veritatis.</p>
                    </div>
                    <div className="BottomLine">
                        <span>
                            <a href="">Фиолетовый</a>
                            <a href="">Серый</a>
                        </span>
                        <img src={avatar}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TodoList