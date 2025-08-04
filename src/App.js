import React from 'react';

class connectionExample extends React.Component {
  componentDidMount() {
    const apiUrl = 'http://127.0.0.1:8000/api/';
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data fetched successfully:', data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  render() {
    return (
      <div>
        <h1>Connection Example</h1>
        <p>This is a simple example of a React component.</p>
      </div>
    );
  }
}
export default connectionExample;