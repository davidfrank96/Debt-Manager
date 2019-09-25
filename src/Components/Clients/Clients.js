import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";



class Clients extends Component {
  render() {
    const { Clients } = this.props;

    if (Clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-users" /> Clients{" "}
              </h2>
            </div>
            <div className="col-md-6" />
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {Clients.map(clients => (
                <tr key={clients.id}>
                  <td>
                    {clients.firstName} {clients.lastName}
                  </td>
                  <td>{clients.email}</td>
                  <td>#{parseFloat(clients.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/clients/${clients.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

Clients.PropTypes = {
  firestore: PropTypes.object.isRequired,
  Clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "Clients" }]),
  connect((state, prop) => ({
    Clients: state.firestore.ordered.Clients
  }))
)(Clients);
