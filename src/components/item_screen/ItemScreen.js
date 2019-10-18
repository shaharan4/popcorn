import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    state={
        currentItem: this.props.currentItem,
        description: '',
        assigned_to: '',
        due_date: '',
        completed: false
    }

    updateDescription = (e) =>{
        this.setState({description: e.target.value})
    }

    updateAssignedTo = (e) =>{
        this.setState({assigned_to: e.target.value})
    }

    updateDueDate = (e) =>{
        this.setState({due_date: e.target.value})
    }

    updateCompleted = () =>{
        this.setState({completed: !this.state.completed})
    }
    checkSubmit = () => {
        if(this.state.currentItem==null){
            console.log("currentItem is null so we add")
            this.addItem();
        }
        else{
            console.log("currentItem exists so we edit")
        }
    }
    addItem = () => {
        console.log("we got upto addItem");
        var newItem ={key: this.props.currentList.items.length,
                      description: this.state.description,
                      assigned_to: this.state.assigned_to,
                      due_date: this.state.due_date,
                      completed: this.state.completed
                        }
        console.log(newItem);
        this.props.currentList.items.push(newItem);
        this.props.addItem(newItem);
        console.log(this.props.currentList.items);
        


    }
        
    render() {
        return (
            <div id='todo_item'>
                <div id='item_form_container'>
                    <div id="item_heading">
                        Item
                    </div>
                    <div id="item_description_container" className="text_toolbar">
                        <span id="item_description_prompt">Description:</span>
                        <input 
                            defaultValue={""} onChange={this.updateDescription}
                            type="text" 
                            id="item_description_textfield" />
                    </div>
                    <div id="item_assigned_to_container" className="text_toolbar">
                        <span id="item_assigned_to_prompt">Assigned To:</span>
                        <input 
                            defaultValue={""} onChange={this.updateAssignedTo}
                            type="text" 
                            id="item_assigned_to_textfield" />
                    </div>
                    <div id="item_due_date_container" className="text_toolbar">
                        <span id="item_due_date_prompt">Due Date:</span>
                        <input 
                            defaultValue={""} onChange={this.updateDueDate}
                            type="date" 
                            id="item_due_date_picker" />
                    </div>
                    <div id="item_completed_container" className="text_toolbar">
                        <span id="item_completed_prompt">Completed:</span>
                        <input
                            type="checkbox" onChange={this.updateCompleted}
                            id="item_completed_checkbox"/>
                    
                    </div>
                    <div id="item_form_submit_button_container" className="text_toolbar">
                        
                        <button id="item_form_submit_button" disabled={this.state.description==''
                        || this.state.assigned_to=='' || this.state.due_date==''} onClick={this.checkSubmit} >Submit</button>

                        
                    </div>
                    <div id="item_form_cancel_button_container" className="text_toolbar">
                        <button id="item_form_cancel_button" onClick={this.props.showListScreen}>Cancel</button>
                    </div>
                
                </div>
            </div>
        )
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
