import "./Sidebar.css"
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShopIcon from '@material-ui/icons/Shop';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FeedbackIcon from '@material-ui/icons/Feedback';
import MessageIcon from '@material-ui/icons/Message';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ReportOffIcon from '@material-ui/icons/ReportOff';



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <AccountCircleIcon className="sidebarIcon"/>
                        User
                    </li>
                    <li className="sidebarListItem">
                        <ShopIcon className="sidebarIcon"/>
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoneyIcon className="sidebarIcon"/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <SignalCellularAltIcon className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notification</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <MailOutlineIcon className="sidebarIcon"/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <FeedbackIcon className="sidebarIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <MessageIcon className="sidebarIcon"/>
                        Message
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <ShoppingBasketIcon className="sidebarIcon"/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <ReportOffIcon className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Sidebar