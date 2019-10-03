import React from 'react'
import CowList from './cowList.jsx'
import TopCow from './topCow.jsx'
//import other components


class App extends React.Component {
  constructor(props) {
    super (props)

    this.state = {
      name : '',
      description: '',
      showDescription : false,
      cowList : [], 
      active : {id: '', name: '', description: ''}
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value})
  }

  handleClick(id, name, description){
    this.setState({
      active : {id: id, name : name, description: description},
      //showDescription: !showDescription
    })
  }

  handleUpdate() {
    event.preventDefault()
    fetch('/api/cows',
      { method: 'UPDATE',
          body: JSON.stringify(this.state.active),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(() => {
          fetch('http://localhost:3000/api/cows')
            .then((result) => {
              return result.json()
            })
            .then((parsed) => {
              this.setState({
                cowList: parsed
              })
            })
            .catch()
        })
          .catch(err =>{    
            console.log(err);
          })
  }

  handleDelete() {
    fetch('/api/cows',
      { method: 'DELETE',
          body: JSON.stringify(this.state.active),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(() => {
          fetch('http://localhost:3000/api/cows')
            .then((result) => {
              return result.json()
            })
            .then((parsed) => {
              this.setState({
                active : {id: '', name: '', description: ''},
                cowList: parsed
              })
            })
            .catch()
        })
        .catch(err =>{    
            console.log(err);
          })
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = {
        name: this.state.name,
        description: this.state.description
      }
      fetch('/api/cows',
      { method: 'POST',
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(() => {
          fetch('http://localhost:3000/api/cows')
            .then((result) => {
              return result.json()
            })
            .then((parsed) => {
              this.setState({
                cowList: parsed
              })
            })
            .catch()
        })
          .catch(err =>{    
            console.log(err);
          })
  }
  

  componentDidMount() {
    fetch('http://localhost:3000/api/cows')
      .then((result) => {
        return result.json()
      })
      .then((parsed) => {
        this.setState({
          cowList: parsed
        })
      })
      .catch()
  }


render() {
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleNameChange}
        />
      </label>
      <label>
        Description:
        <input type="text" value={this.state.value} onChange={this.handleDescriptionChange}/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
    <form>
      <label>
      Update Name: 
        <input type="text" value={this.state.value}/>
      </label>
      <label>
      Update Description: 
        <input type="text" value={this.state.value}/>
      </label>
      <input type="submit" value="update" onClick={this.handleUpdate}/>
    </form>
    
    <TopCow active={this.state.active} />
    <CowList list={this.state.cowList} handleClick={this.handleClick} />

    <input type="submit" value="delete" onClick={this.handleDelete}/>
    </div>
  )
}



}

export default App;


