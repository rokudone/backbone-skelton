import Backbone from 'backbone';

class Memo extends Backbone.Model {
  defaults() {
    return {
      title: '',
      content: ''
    };
  }
}

export default Memo;
