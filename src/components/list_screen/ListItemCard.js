import React, { Component } from 'react'

export class ListItemCard extends Component {
    
    moveUpList = () =>{
        let currIndex = this.props.todoList.items.indexOf(this.props.listItem);
        if(currIndex>=1){
            let temp = this.props.listItem;
            this.props.todoList.items[currIndex]=this.props.todoList.items[currIndex-1];
            this.props.todoList.items[currIndex-1]=temp;
            this.props.loadList(this.props.todoList);
        }

    }

    moveDownList = () =>{
        let currIndex = this.props.todoList.items.indexOf(this.props.listItem);
        if(currIndex<this.props.todoList.items.length-1){
            let temp = this.props.listItem;
            this.props.todoList.items[currIndex]=this.props.todoList.items[currIndex+1];
            this.props.todoList.items[currIndex+1]=temp;
            this.props.loadList(this.props.todoList);
        }
    }
    deleteListItem = () =>{
        let currIndex = this.props.todoList.items.indexOf(this.props.listItem);
        this.props.todoList.items.splice(currIndex, 1);
        this.props.loadList(this.props.todoList);

    }
    render() {
        return (

            <div className='list_item_card'>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                {(this.props.listItem.completed)?<div className='list_item_card_completed'>
                    Completed
                </div>:<div className='list_item_card_not_completed'>
                    Pending
                </div>}
                {this.props.todoList.items.indexOf(this.props.listItem) == 0 ?
                <button className="list_item_card_button disabled" onClick={this.moveUpList}>⇧</button>:
                <button className="list_item_card_button" onClick={this.moveUpList}>⇧</button>}
                {this.props.todoList.items.indexOf(this.props.listItem) == this.props.todoList.items.length-1 ?
                <button className="list_item_card_button disabled" onClick={this.moveDownList}>⇩</button>:
                <button className="list_item_card_button" onClick={this.moveDownList}>⇩</button>}       
                <button className="list_item_card_button" onClick={this.deleteListItem}>🗙</button>
                
                
            </div>
        )
    }
}

export default ListItemCard
