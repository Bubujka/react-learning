var App = React.createClass({
  componentWillReceiveProps: function(newProps){
    if(newProps.data){
      this.renderChart(newProps.data);
    }
  },
  renderChart: function(dataset){
    d3.select('#'+this.props.target).selectAll('div')
      .data(dataset)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function(d){
        return d.val * 5 + 'px';
      });
  },
  render: function(){
    return <div id={this.props.target}></div>;
  }
});

angular
.module('RNG', [])
.controller('MainController', function($scope, $http){
  $scope.data = [];
  $scope.data2 = [];
  $http
    .get('http://www.filltext.com/?rows=10&val={randomNumber}')
    .success(function(data) {
      $scope.data = data
    });
  $http
    .get('http://www.filltext.com/?rows=10&val={randomNumber}')
    .success(function(data) {
      $scope.data2 = data
    });
})
.directive('chart', function(){
  return {
    restrict: 'E',
    scope: {
      data : '=',
      id : '@'
    },
    link: function(scope, el, attrs){
      scope.$watch('data', function(n, o){
        if(n){
          React.render(<App data={n} target={scope.id} />, el[0]);

        }
      });
    }
  }
});

