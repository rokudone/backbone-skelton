import Backbone from 'backbone';
import _ from 'underscore';
import Memo from '../models/Memo';

import itemTemplate from '../templates/item.ejs';

class ItemView extends Backbone.View<Memo> {
  isEditing: boolean;

  events() {
      return {
          "click .edit": this.startEditing,
          "click .delete": this.onDelete,
          "submit .edit-form": this.finishEditing,
          "reset .edit-form": this.cancelEditing
      };
  }

  constructor(options: Backbone.ViewOptions<Backbone.Model> & {model: Memo}) {
    console.log('ItemView constructor')
      super(options);
      this.model = options.model;
      this.isEditing = false;
      this.render();
  }

  startEditing() {
      this.isEditing = true;
      this.render();
  }

  finishEditing() {
      this.isEditing = false;
      this.model.set({
          title: this.$('input[name="title"]').val(),
          content: this.$('textarea[name="content"]').val()
      });
      this.render();
  }

  cancelEditing() {
      this.isEditing = false;
      this.render();
  }

  onDelete() {
      this.model.destroy();
      this.remove();
  }

  render() {
      this.$el.html(itemTemplate({...this.model.toJSON(), isEditing: this.isEditing}));
      return this;
  }
}

export default ItemView;