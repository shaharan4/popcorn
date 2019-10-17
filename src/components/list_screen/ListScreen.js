import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import PropTypes from 'prop-types';

export class ListScreen extends Component {
    

    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return this.props.todoList.name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return this.props.todoList.owner;
        }
    }
    updateListName(e){
        let newName = e.target.value
        if(newName.length == ''){
            this.props.todoList.name = "Unknown";
        }
        else{
        this.props.todoList.name = newName
        }
    }
    

    updateListOwner(e){
        let newOwner = e.target.value
        if(newOwner == ''){
            this.props.todoList.owner = "Unknown";
        }
        else{
        this.props.todoList.owner = newOwner
        }
    }
    render() {
        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                <ListTrash deleteList ={this.props.deleteList}/>
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input 
                            defaultValue={this.getListName()} 
                            type="text" onChange={e => this.updateListName(e)}
                            id="list_name_textfield" />
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            defaultValue={this.getListOwner()}
                            type="text" onChange = {e => this.updateListOwner(e)}
                            id="list_owner_textfield" />
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList}
                                loadList={this.props.loadList} />
            </div>
        )
    }
}

export default ListScreen
