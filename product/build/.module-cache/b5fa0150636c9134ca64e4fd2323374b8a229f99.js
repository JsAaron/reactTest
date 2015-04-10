var FancyCheckbox = React.createClass({displayName: "FancyCheckbox",
  render: function() {
  	console.log(this.props)
    var { checked, ...other } = this.props;
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    // `other` 包含 { onClick: console.log } 但 checked 属性除外
    return (
      React.createElement("div", React.__spread({},  other, {className: fancyClass}))
    );
  }
});
React.render(
  React.createElement(FancyCheckbox, {checked: true, dataed: true, aaron: 'chenwen', onClick: console.log.bind(console)}, 
    "Hello world!"
  ),
  document.body
);