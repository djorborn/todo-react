import ReactDOM from 'react-dom'
import React from 'react'
import './mystyle.scss'
import './font-awesome'

const items = [
  {id: 0, text: "hi"},
  {id: 1, text: "meow"}
]

const list = items.map((i) => <li key={i.id} className="panel-block">
  <div className="control">
    <div className="content">{i.text}</div>
  </div>
  <div className="control">
    <span className="icon button">
      <i className="fa">times</i>
    </span>
  </div>
</li>)

 class Todo extends React.Component {
   constructor (props) {
     super(props)
     this.state = {}
   }

   render () {
    return <div className="section">
      <div className="container">
        <div className="panel">
          <input type="text" className="panel-heading input"/>
          <div className="panel-block">
            <div className="field has-addons">
              <div className="control">
                <input type="text" className="input"/>
              </div>
              <div className="control">
                <button className="button">
                  <span>
                    <i className="fa">times</i>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/*This is where list goes*/}
          {list}
        </div>
      </div>
    </div>
  }
 }

class App extends React.Component {
  render () {
    return (
      <div>
        <Todo/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {

  });
}
