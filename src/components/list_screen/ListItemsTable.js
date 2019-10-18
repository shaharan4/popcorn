import React, { Component } from 'react'
import ListItemCard from './ListItemCard'
import { tsImportEqualsDeclaration } from '@babel/types'

export class ListItemsTable extends Component {
    
    state={
        sort: null
    }
    sortFunction = (firstItem, secondItem) => {
        if (this.state.sort == 'task_decreasing'
            || this.state.sort == 'due_date_decreasing'
            || this.state.currentSort == 'status_decreasing') {
            let temp = firstItem;
            firstItem = secondItem;
            secondItem = temp;
        }
        if (this.state.sort == 'task'
            || this.state.sort == 'task_decreasing') {
            if (firstItem.description < secondItem.description)
                return -1;
            else if (firstItem.description > secondItem.description)
                return 1;
            else
                return 0;
        }
        else if (this.state.sort == 'due_date'
            || this.state.sort == 'due_date_decreasing') {
            let firstDate = firstItem.due_date;
            let secondDate = secondItem.due_date;
            var x = new Date(firstDate);
            var y = new Date(secondDate);
            if (x < y)
                return -1;
            else if (x > y)
                return 1;
            else
                return 0;
        }else if (this.state.sort == 'status'
        || this.state.sort == 'status_decreasing'){
            if (firstItem.completed < secondItem.completed)
                return -1;
            else if (firstItem.completed > secondItem.completed)
                return 1;
            else
                return 0;
        }
    }

    sortByTask = () =>{
        this.loadList = this.props.loadList.bind(this, this.props.todoList);
        if(this.state.sort=='task'){
            this.setState({sort: 'task_decreasing'})
            this.props.todoList.items.sort(this.sortFunction);
            this.loadList();
        }
        else{
            this.setState({sort: 'task'});
            this.props.todoList.items.sort(this.sortFunction);
            this.loadList();
        }
    }
    sortByDueDate = () =>{
        this.loadList = this.props.loadList.bind(this, this.props.todoList);
        if(this.state.sort=='due_date'){
            this.setState({sort: 'due_date_decreasing'})
            this.props.todoList.items.sort(this.sortFunction);
            this.loadList();
        }
        else{
            this.setState({sort: 'due_date'});
                this.props.todoList.items.sort(this.sortFunction);
                this.loadList();
            

        }
    }

    sortByStatus = () =>{
        this.loadList = this.props.loadList.bind(this, this.props.todoList);
        if(this.state.sort=='status'){
            this.setState({sort: 'status_decreasing'});
            this.props.todoList.items.sort(this.sortFunction);
            this.loadList();
        }
        else{
            this.setState({sort: 'status'});
            this.props.todoList.items.sort(this.sortFunction);
            this.loadList();
        }
    }

   
        
    
    render() {
        return (
            <div id="list_items_container">
                <div id="list_header_container">
                    <div className="list_item_task_header" onClick={this.sortByTask}>Task</div>
                    <div className="list_item_due_date_header" onClick={this.sortByDueDate}>Due Date</div>
                    <div className="list_item_status_header" onClick={this.sortByStatus}>Status</div>
                </div>
               
                
                {
                    this.props.todoList.items.map((todoItem)=>(
                        <ListItemCard 
                            listItem={todoItem}
                            todoList={this.props.todoList}
                            loadList={this.props.loadList}
                            startEditItem={this.props.startEditItem} />
                    ))
                }
                <button className="list_item_add_card" onClick={this.props.showItemScreen}><b>+</b></button>
            </div>
        )
    }
}

export default ListItemsTable
