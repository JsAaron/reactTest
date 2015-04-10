var FancyCheckbox = React.createClass({displayName: "FancyCheckbox",
  aaa:function(){
  	 alert(1)
  },
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
  React.createElement(FancyCheckbox, {checked: true, onClick: aaa}, 
    "Hello world!"
  ),
  document.body
);