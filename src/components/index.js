
import "./index.css"
import {Component} from "react"
class Destination extends Component{
    render(){
        const {destinationdetails}=this.props
        const {image,name}=destinationdetails
        return(
            <div className="cont">
                <img className="image" src={image} alt="Destination"/>
                <h1 className="name">{name}</h1>
            </div>
        )
    }
}

export default Destination