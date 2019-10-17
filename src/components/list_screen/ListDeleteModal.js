import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ListDeleteModal extends Component {




    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div className="modalBackground">
                <div className="deleteListModal">
                    <p>Delete list?</p>
                    Are you sure you want to delete this list?<br></br><br></br>
                    <button id="confirm_delete_list_button" onClick={this.props.confirmDelete}>Yes</button>
                    <button id="cancel_delete_list_button" onClick={this.props.cancelDelete}>No</button>
                    <br></br><br></br>
                    This list will not be retrievable.
                </div>
            </div> 
            
        )
    }
}
ListDeleteModal.propTypes ={
    confirmDelete: PropTypes.func.isRequired,
    cancelDelete: PropTypes.func.isRequired,
    show: PropTypes.bool
}

export default ListDeleteModal
