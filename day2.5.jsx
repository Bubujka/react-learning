var Transformer = React.createClass({
  getInitialState: function(){
    return {
      input: '',
      output: '',
      err: '',

    };
  },
  update: function(e) {
    var code = e.target.value;
    try{
      this.setState({
        output: JSXTransformer.transform(code).code,
        err: ''
      });
    }catch(err){
      this.setState({
        err: err.message
      });
    }
  },
  render: function(){
    return <div>
      <b>{this.state.err}</b><br />
      <textarea onChange={this.update} defaultValue={this.state.input} />
      <pre>{this.state.output}</pre>
    </div>;
  }
});
React.render(<Transformer />, document.body);
