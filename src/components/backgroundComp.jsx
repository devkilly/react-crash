import React, { Component } from "react";

class Background extends Component {
  state = {
    image: (
      <img src="https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjUps6DhvbeAhVFxpAKHRNJBa8QjRx6BAgBEAU&url=https%3A%2F%2Finsideosaka.com%2Fosaka-districts%2F&psig=AOvVaw2yuRtsT04Uzi5w-jMTH_ka&ust=1543458744168918" />
    ),
    yusuke: (
      <img
        src="https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi35JbAhvbeAhWIlJAKHS3NAw8QjRx6BAgBEAU&url=https%3A%2F%2Fknowyourmeme.com%2Fphotos%2F1148932-crying-laughing-emoji-%25F0%259F%2598%2582&psig=AOvVaw2MTKWIj7MKOGSg-X_qdSV5&ust=1543458853012137"
        alt="yusuke"
      />
    )
  };

  render() {
    return <div>{this.state.yusuke}</div>;
  }
}

export default Background;
