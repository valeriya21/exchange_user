import React from "react"
import axios from "axios"

class Leaderboard extends React.Component {

    state = {
        gotData: false,
        leaderBoard: []
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/leaderboard`).then(data => {
            this.setState({gotData: true, leaderBoard: data.data})
        })
    }
    
    render() {
        return (
            <section className="container leaderboard">
                
		 <section className="hero is-primary is-bold">
					<div className="hero-body">
						<h1 className="title has-text-centered is-uppercase">Leaderboard</h1>
					</div>
				</section>
                    { !this.state.gotData ? <h1 className="leaderboard_loader">Loading....</h1> : 
                       
                        <table className="table is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>Sr. No</th>
                                <th>Name of the User</th>
                                <th>Total Profit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.leaderBoard.map((user, index) => {
                                    if(index < 10) {
                                        return (
                                            <tr key={user.creator}>
                                                <td> {index+1} </td>
                                                <td> {user.name.toUpperCase()} </td>
                                                <td> $ {user.profitLoss} </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                        </table>
                    }
                
            </section>
        )
    }
}

export default Leaderboard
