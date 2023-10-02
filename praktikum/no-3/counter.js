
//Functional Component
function CounterFunctional() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>
        + 1
      </button>
      <button onClick={() => setCount(count - 1)}>
        - 1
      </button>
    </div>
  );
}

const myElement = <CounterFunctional />;
const counterFunctional = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(counterFunctional);


// class CounterClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.increment}>+1</button>
//         <button onClick={this.decrement}>-1</button>
//       </div>
//     );
//   }
// }

// const myElement = <CounterClass />;
// const counterClass = myElement;

// ReactDOM.createRoot(document.getElementById('root')).render(counterClass);