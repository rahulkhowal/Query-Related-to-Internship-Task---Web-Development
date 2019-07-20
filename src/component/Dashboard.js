import React,{Component} from 'react'
import OpeningHours from './DashboardComponents/OpeningHours'

class Dashboard extends Component{	
render(){
		//const {lists}= this.state.data
		return(
          <div className="container">
            <OpeningHours/>
          </div>
			);
  }
}
export default Dashboard