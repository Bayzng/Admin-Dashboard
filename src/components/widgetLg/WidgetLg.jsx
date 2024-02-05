import "./widgetLg.css"

const WidgetLg = () => {

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }

  return (
    <div className="widgetLg">
        <h2 className="widgetLgTitle">Latest Transactions</h2>
        <table className="widgetTable">
          <tr className="widgeLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/5034475/pexels-photo-5034475.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetLgImage" />
              <span className="widgetLgName">ABDULAKEEM ADEBAYO</span>
            </td>
            <td className="widgetLgDate">23 Jul 2023</td>
            <td className="widgetLgAmount">#54,000</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/5034475/pexels-photo-5034475.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetLgImage" />
              <span className="widgetLgName">ABDULAKEEM ADEBAYO</span>
            </td>
            <td className="widgetLgDate">23 Jul 2023</td>
            <td className="widgetLgAmount">#54,000</td>
            <td className="widgetLgStatus"><Button type="Declined"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/5034475/pexels-photo-5034475.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetLgImage" />
              <span className="widgetLgName">ABDULAKEEM ADEBAYO</span>
            </td>
            <td className="widgetLgDate">23 Jul 2023</td>
            <td className="widgetLgAmount">#54,000</td>
            <td className="widgetLgStatus"><Button type="Pending"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/5034475/pexels-photo-5034475.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetLgImage" />
              <span className="widgetLgName">ABDULAKEEM ADEBAYO</span>
            </td>
            <td className="widgetLgDate">23 Jul 2023</td>
            <td className="widgetLgAmount">#54,000</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>
        </table>
    </div>
  )
}

export default WidgetLg