var FancyCheckbox = React.createClass({displayName: "FancyCheckbox",
  render: function() {
  	console.log(this.props)
    // var { checked, ...other } = this.props;
    // var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    // // `other` 包含 { onClick: console.log } 但 checked 属性除外
    // return (
    //   <div {...other} className={fancyClass} />
    // );
  }
});
React.render(
  React.createElement(FancyCheckbox, {checked: true, "data-value": true, "data-aaron": 'chenwen', onClick: console.log.bind(console)}, 
    "Hello world!"
  ),
  document.body
);