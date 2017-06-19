import Component, { tracked } from '@glimmer/component';

class quotes extends Component {
  @tracked
  message: any;

  constructor(options) {
    super(options);
    this.loadMessage();
  }

  async loadMessage() {
    let request = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    let [ quote ] = await request.json();
    this.message = quote;

    setTimeout(() => { this.loadMessage(); }, quote.length * 75 );
  }
}

export default quotes;
