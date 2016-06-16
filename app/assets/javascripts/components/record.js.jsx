var Record = React.createClass({

  getInitialState: function() {
    return { edit: false };
  },

  handleDelete: function(e) {
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/records/' + this.props.record.id,
      dataType: 'JSON',
      success: function() {
        this.props.handleDeleteRecord(this.props.record)
      }.bind(this)
    });
  },

  render: function() {
    return (
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
        <td>
          <button className="btn btn-danger" onClick={this.handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
});
