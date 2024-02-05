import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">#2,430</span>
                <span className="featuredMoneyRate">
                    -11,200 <ArrowDownward className="feacturedIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">#2,430</span>
                <span className="featuredMoneyRate">
                    -2.0 <ArrowDownward className="feacturedIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">#5,670</span>
                <span className="featuredMoneyRate">
                    +2.4 <ArrowUpward className="feacturedIcon"/>
                </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo