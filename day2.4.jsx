
var PersonTable = React.createClass({
  getInitialState: function(){
    return {
      data: [
        {id: 1, name: 'name 1'},
        {id: 2, name: 'name 2'},
        {id: 3, name: 'name 3'},
        {id: 4, name: 'name 4'},
        {id: 5, name: 'name 5'},
        {id: 6, name: 'name 6'},
        {id: 7, name: 'name 7'},
        {id: 8, name: 'name 8'},
        {id: 9, name: 'name 9'},
        {id: 10, name: 'name 10'},
        {id: 11, name: 'name 11'},
        {id: 12, name: 'name 12'}
      ]
    };
  },
  render: function(){
    var rows = this.state.data.map(function(person,i) {
      return <PersonRow data={person} key={person.id}/>
    });
    return <table>
      {rows}
    </table>;
  }
});

var PersonRow = React.createClass({
  render: function(){
    return <tr key={0}>
      <td>{this.props.data.id}</td>
      <td>{this.props.data.name}</td>
    </tr>;
  }
});

React.render(<PersonTable />, document.body);
