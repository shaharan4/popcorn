import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    state={
        currentItem: this.props.currentList.items[this.props.currentItemIndex],
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

    updateCompleted = (e) =>{
        console.log("asd");
        this.setState({completed: e.target.checked})
    }
    checkSubmit = () => {
        if(this.props.currentItemIndex==null){
            this.addItem();
            console.log("adding new item, not edit")
        }
        else{
            console.log("currentItem exists so we edit")
            this.editItem();
        }
    }
    addItem = () => {
        var newItem ={key: this.props.currentList.items.length,
                      description: this.state.description,
                      assigned_to: this.state.assigned_to,
                      due_date: this.state.due_date,
                      completed: this.state.completed
                        }
        this.props.currentList.items.push(newItem);
        this.props.addItem(newItem);
    }
    
    editItem = () => {
        var newItem={key: this.props.currentItemIndex,
                     description: this.state.description,
                     assigned_to: this.state.assigned_to,
                     due_date: this.state.due_date,
                     completed: this.state.completed
                    }
        console.log(newItem.key);
        console.log(this.props.currentList.items);
        this.props.currentList.items.splice(this.props.currentItemIndex, 1)
        console.log(this.props.currentList.items);
        this.props.currentList.items.splice(this.props.currentItemIndex, 0, newItem);
        console.log(this.props.currentList.items);
        console.log("array stuff done")
        this.props.addItem(newItem);
}
        

componentDidMount() {
    if(this.props.currentItemIndex!=null) {
        this.setState({description: document.getElementById("item_description_textfield").value})
        this.setState({assigned_to: document.getElementById("item_assigned_to_textfield").value})
        this.setState({due_date: document.getElementById("item_due_date_picker").value})
        this.setState({completed: document.getElementById("item_completed_checkbox").checked})
    }
}
    render() {
        if(this.props.currentItemIndex!=null){
            return (
                <div id='todo_item'>
                    <div id='item_form_container'>
                        <div id="item_heading">
                            Item
                        </div>
                        <div id="item_description_container" className="text_toolbar">
                            <span id="item_description_prompt">Description:</span>
                            <input 
                                defaultValue={this.props.currentList.items[this.props.currentItemIndex].description} onChange={e => this.updateDescription(e)}
                                type="text" 
                                id="item_description_textfield" />
                        </div>
                        <div id="item_assigned_to_container" className="text_toolbar">
                            <span id="item_assigned_to_prompt">Assigned To:</span>
                            <input 
                                defaultValue={this.props.currentList.items[this.props.currentItemIndex].assigned_to} onChange={e => this.updateAssignedTo(e)}
                                type="text" 
                                id="item_assigned_to_textfield" />
                        </div>
                        <div id="item_due_date_container" className="text_toolbar">
                            <span id="item_due_date_prompt">Due Date:</span>
                            <input 
                                defaultValue={this.props.currentList.items[this.props.currentItemIndex].due_date} onChange={e =>this.updateDueDate(e)}
                                type="date" 
                                id="item_due_date_picker" />
                        </div>
                        <div id="item_completed_container" className="text_toolbar">
                            <span id="item_completed_prompt">Completed:</span>
                            <input
                                defaultChecked={this.props.currentList.items[this.props.currentItemIndex].completed}
                                type="checkbox" onChange={e => this.updateCompleted(e)}
                                id="item_completed_checkbox"/>
                        
                        </div>
                        <div id="item_form_submit_button_container" className="text_toolbar">
                            
                            <button id="item_form_submit_button" disabled={this.state.description==''
                            && this.state.assigned_to=='' && this.state.due_date==''} onClick={this.editItem} >Submit</button>
    
                            
                        </div>
                        <div id="item_form_cancel_button_container" className="text_toolbar">
                            <button id="item_form_cancel_button" onClick={this.props.showListScreen}>Cancel</button>
                        </div>
                    
                    </div>
                </div>
            )

        }
        else{
        return (
            <div id='todo_item'>
                <div id='item_form_container'>
                    <div id="item_heading">
                        Item
                    </div>
                    <div id="item_description_container" className="text_toolbar">
                        <span id="item_description_prompt">Description:</span>
                        <input 
                            defaultValue={''} onChange={this.updateDescription}
                            type="text" 
                            id="item_description_textfield" />
                    </div>
                    <div id="item_assigned_to_container" className="text_toolbar">
                        <span id="item_assigned_to_prompt">Assigned To:</span>
                        <input 
                            defaultValue={''} onChange={this.updateAssignedTo}
                            type="text" 
                            id="item_assigned_to_textfield" />
                    </div>
                    <div id="item_due_date_container" className="text_toolbar">
                        <span id="item_due_date_prompt">Due Date:</span>
                        <input 
                            defaultValue={''} onChange={this.updateDueDate}
                            type="date" 
                            id="item_due_date_picker" />
                    </div>
                    <div id="item_completed_container" className="text_toolbar">
                        <span id="item_completed_prompt">Completed:</span>
                        <input
                            defaultValue={false}
                            type="checkbox" onChange={this.updateCompleted}
                            id="item_completed_checkbox"/>
                    
                    </div>
                    <div id="item_form_submit_button_container" className="text_toolbar">
                        
                        <button id="item_form_submit_button" disabled={this.state.description==''
                        || this.state.assigned_to=='' || this.state.due_date==''} onClick={this.addItem} >Submit</button>

                        
                    </div>
                    <div id="item_form_cancel_button_container" className="text_toolbar">
                        <button id="item_form_cancel_button" onClick={this.props.showListScreen}>Cancel</button>
                    </div>
                
                </div>
            </div>
        )
    }
}
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
