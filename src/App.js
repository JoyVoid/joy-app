import logo from './logo.svg';
import './App.css';

var strArray = [];

      function ddlChange(val)
      {
        var ddl = document.getElementById('choose');
        if (strArray.length == 0)
        {
          pushValueToText(val);
          return;
        }
        for (let i = 0; i <= strArray.length-1; i++)
        {
          if (val == strArray[i])
            continue;
          else 
            pushValueToText(strArray[i]);   
        }
          //screen.innterHTML = strArray;
          //textBox.value += val + ",";
      }
      function pushValueToText(value)
      {
            strArray.push(value);
            var tag = document.createElement("p");
            var text = document.createTextNode("TextNode");
            tag.appendChild(text);
            var element = document.getElementById("textOutput");
            element.appendChild(tag);
            Console.log();(strArray);
            //var textBox = document.getElementById('choices');
            //textBox.value = value;
      }
//resizes textbox when choices are added via ddl
    function resizeOnChange(){      
        var output = document.getElementById('textOutput'); // get the input element
        output.addEventListener('textOutput', resizeInput); // bind the "resizeInput" callback on "input" event
        resizeInput.call(output); // immediately call the function
    }

      function resizeInput() {
      this.style.width = this.value.length + "ch";}
  


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
