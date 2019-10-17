import React, { Component } from 'react'
import ListItemCard from './ListItemCard'

export class ListItemsTable extends Component {
    
    render() {
        return (
            <div id="list_items_container">
                <div id="list_header_container">
                    <div className="list_item_task_header">Task</div>
                    <div className="list_item_due_date_header">Due Date</div>
                    <div className="list_item_status_header">Status</div>
                </div>
               
                
                {
                    this.props.todoList.items.map((todoItem)=>(
                        <ListItemCard 
                            key={todoItem.key}
                            listItem={todoItem}
                            todoList={this.props.todoList}
                            loadList={this.props.loadList} />
                    ))
                }
            </div>
        )
    }
}

export default ListItemsTable
