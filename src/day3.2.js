var App = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
    return {
      name: '',
      email: ''
    };
  },
  render: function(){
    return <div>
      <form>
        <label>
          *{this.state.name}*
          <input valueLink={this.linkState('name')} type='text' name='name' />
        </label>
        <label>
          *{this.state.email}*
          <input valueLink={this.linkState('email')} type='text' name='email' />
        </label>
      </form>
    </div>;
  }
});

React.render(<App />, document.body);
