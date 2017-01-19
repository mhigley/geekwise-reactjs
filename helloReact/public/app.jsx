var GreeterMsg = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Some heading</h1>
                <p>Some paragraph</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    render: function(){
        return (
            <form>
                <input type="text" ref="name" />
                <button>Set Name</button>
            </form>
        );
    }
});

var Greeter = React.createClass({
    getDefaultProps: function(){
        return {
            name: 'React',
            msg: 'This is from the component'
        };
    },
    getInitialState: function(){
        return {
            name: this.props.name
        };
    },
    onButtonClick: function(e){
        e.preventDefault();
        var nameRef = this.refs.name;

        var name = nameRef.value;
        nameRef.value = "";

        if(typeof name==="string" && name.length > 0){
            this.setState({
                name: name
            });
        }
    },
    render: function(){
        var name = this.state.name;
        var msg = this.props.msg;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{msg + ", yo!"}</p>

                <GreeterMsg />

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name" />
                    <button>Set Name</button>
                </form>

                <GreeterForm />
            </div>
        );
    }
});

var fullName = "Matthew David Higley";

ReactDOM.render(
    <Greeter name={fullName}/>,
    document.getElementById('app')
);
