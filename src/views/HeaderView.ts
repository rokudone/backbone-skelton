import Backbone from 'backbone';
import _ from 'underscore';
import headerTemplate from '../templates/header.ejs';

class HeaderView extends Backbone.View {
  events() {
      return {
          "click .top": this.toTop,
          "click .create": this.onCreate
      };
  }

  constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
      super(options);
      this.render();
  }

  render() {
      this.$el.html(headerTemplate());
      return this;
  }

  toTop() {
      window.app.router.navigate("", {trigger:true});
  }

  onCreate(e: JQuery.Event) {
     e.preventDefault();
      window.app.router.navigate("create", {trigger:true});
  }
}

export default HeaderView;