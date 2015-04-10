var FancyCheckbox = React.createClass({displayName: "FancyCheckbox",
  render: function() {
    var fancyClass = this.props.checked ? 'FancyChecked' : 'FancyUnchecked';
    return (
      React.createElement("div", {className: fancyClass, onClick: this.props.onClick}, 
        this.props.children
      )
    );
  }
});
React.render(
  React.createElement(FancyCheckbox, {checked: true, onClick: console.log.bind(this)}, 
    "Hello world!"
  ),
  document.body
);