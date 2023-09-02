import React, {useEffect, useState} from "react";
import './TodoList.css'
import http from '../../http-common'
import add from './add_bold.png'
import avatar from './Avatar.png'
import { faker } from '@faker-js/faker';
import moment from "moment";

const TodoList = () => {

    var startDate = faker.date.past();
    var endDate = faker.date.future();
    var formattedStartDate = moment(startDate).format('MMM D, h:mm a');
    var formattedEndDate = moment(endDate).format('MMM D, h:mm a');
    var randomDescription = faker.lorem.words(100)
    var randomTagOne = faker.lorem.words(1)
    var randomTagTwo = faker.lorem.words(1)

    const[todos, setTodos] = useState([])

    useEffect(() => {
        const getTodos = async() => {
            const res = await http.get('/todos')
            setTodos(res.data)
        }
        getTodos()
    }, [])

    const GenerateDataHandler = () => {
        startDate = faker.date.past();
        endDate = faker.date.future();
        formattedStartDate = moment(startDate).format('MMM D, h:mm a');
        formattedEndDate = moment(endDate).format('MMM D, h:mm a');
        randomDescription = faker.lorem.words(100)
        randomTagOne = faker.lorem.words(1)
        randomTagTwo = faker.lorem.words(1)
        return null
    }
        
    return(
        <div className="TodoListWrapper">
            <div className="TopLine">
                <p className="green main-font-weight">Today</p>
                <div><img src={add} /><p className="grey">{todos.length}</p></div>
            </div>
            {todos &&
                todos.map((t, idx) => (
                    <div className="card" key={idx}>
                        {GenerateDataHandler()}
                        <div className="Todo">
                            <div className="TodoTitle">
                                <input 
                                type="checkbox"
                                checked={t['completed']}
                                readOnly
                                />
                                <h3 className="task-title">{t['title']}</h3>
                            </div>
                            <div className="TodoDate">
                                <p className="green main-font-weight">{formattedStartDate}</p>
                                <p className="green main-font-weight">{formattedEndDate}</p>
                            </div>
                            <div className="TodoDescription">
                                <p className="ellipsis grey">{randomDescription}</p>
                            </div>
                            <div className="BottomLine">
                                <span>
                                    <a href="" className="main-font-weight">{randomTagOne}</a>
                                    <a href="" className="main-font-weight grey">{randomTagTwo}</a>
                                </span>
                                <img src={avatar}></img>
                            </div>
                        </div>
                    </div>
                    )
                )
            }
        </div>
    )
}
export default TodoList