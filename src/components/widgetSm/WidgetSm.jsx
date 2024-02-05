import "./widgetSm.css"
import { Visibility } from "@material-ui/icons"


const WidgetSm = () => {
  return (
    <div className="widgetsm">
        <span className="widgetSmTitle"><h2>New Member</h2></span>
        <ul className="widgetSmList">
            <li className="widgetsmListItem">
                <img src="https://images.pexels.com/photos/3791129/pexels-photo-3791129.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Dev Bayz</span>
                    <span className="widgetSmTitle">Software Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetsmListItem">
                <img src="https://images.pexels.com/photos/3791129/pexels-photo-3791129.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Dev Bayz</span>
                    <span className="widgetSmTitle">Software Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetsmListItem">
                <img src="https://images.pexels.com/photos/3791129/pexels-photo-3791129.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Dev Bayz</span>
                    <span className="widgetSmTitle">Software Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetsmListItem">
                <img src="https://images.pexels.com/photos/3791129/pexels-photo-3791129.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Dev Bayz</span>
                    <span className="widgetSmTitle">Software Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetsmListItem">
                <img src="https://images.pexels.com/photos/3791129/pexels-photo-3791129.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Dev Bayz</span>
                    <span className="widgetSmTitle">Software Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm