import React, {Component} from "react"

class RegisterRow extends Component{
    render(){
        let student = this.props.student;
        return(
            <tr className="table-active">
                <th scope = "row">{student.carnet}</th>
                <td>{student.schedule}</td>
                <td>{new Date(student.datetime).toLocalString}</td>
                <td>{parseLate(student.isLate)}</td>
                <td>
                    <button
                        type = "button"
                        className = "btn btn-danger"
                        onClick = {() =>{
                            this.props.onDelete();
                        }}
                        Drop
                    />
                </td>
            </tr>
        );
    }
}

const parseLate = value =>{
    if(value){
        return "Tardísimo";
    } 

    return "A tiempo";
};

export default RegisterRow;