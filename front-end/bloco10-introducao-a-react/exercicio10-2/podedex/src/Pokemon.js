import React from 'react';

export default class Pokemon extends React.Component {
  render() {
    const data = this.props.data;
    return data.map((poke) => {
      return (
        <section className="section">
          <h2>{poke.name}</h2>
          <p>{poke.type}</p>
          <p>Average Weight: {poke.averageWeight.value} {poke.averageWeight.measurementUnit}</p>
          <img src={poke.image}/>
        </section>
      );
    });
  }
}
