import Component, { tracked } from '@glimmer/component';

class testname extends Component {
  @tracked
  message: any;

  constructor(options) {
    super(options);
    this.loadMessage();
    setInterval(() => { this.loadMessage(); }, 3500);
  }

  async loadMessage() {
    let request = await fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
    let quote = await request.json();

    this.message=quote[0];
  }
}

export default testname;
