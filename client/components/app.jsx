// Frontend Requirements
// Build the Create and Read functionality of a CRUD app using React. The frontend should make use of the already created RESTful API endpoints to accomplish the following user stories:

// When the user loads the page, the user should see a list of all names of previously created cows (but not their descriptions).

// When the user types the name and description of a new cow they want to input into the database and presses the [Submit] button, the newly created cow's information should be displayed in the list from the previous step only after the data has been successfully written to the database.

// When the user clicks on the name of a cow, the name and description of that cow should be displayed prominently at the top of the page (so as to mimic the functionality of a modal/popup that shows the details of a particular cow).

// a. Only the details of the most recently clicked cow should be prominently displayed at the top of the page at a time. For example, if Betsy is the first cow clicked, Betsy's information should be displayed. If Milkshake is clicked afterwards, only Milkshake's information should be displayed. Betsy's description should no longer be visible.

// b. The details of any clicked cow should be prominently displayed in the same location in the DOM at the top of the page (aka not within the clicked component).


import React from 'react'
//import other components


class App extends React.Component {
  constructor(props) {
    super (props);

    this.state = {

    }
  }



componentDidMount() {

}

render() {

}



}

export default App;


