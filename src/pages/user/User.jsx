import "./user.css"
import { PermIdentity, CalendarToday, Phone, MailOutline, LocationSearching  } from "@material-ui/icons"

const User = () => {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/818563/pexels-photo-818563.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="userShowImage" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Dev Bayz</span>
                        <span className="userShowTitle">Software Developer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">bayz2070</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">20-12-1999</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <Phone className="userShowIcon"/>
                        <span className="userShowInfoTitle">+234 81-4479-6373</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">bayz2070@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">652 Ikeja, Lagos State Nigeria</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate"></div>
        </div>
    </div>
  )
}

export default User