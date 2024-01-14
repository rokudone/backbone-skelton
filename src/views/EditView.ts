import Backbone from 'backbone';
import MemoCollection from '../collections/MemoCollection';
import Memo from '../models/Memo';
import editTemplate from '../templates/edit.ejs';

class EditView extends Backbone.View<Memo> {
  collection: MemoCollection;

  constructor(options: Backbone.ViewOptions<Memo> & { collection: MemoCollection }) {
    super(options);
    this.collection = options.collection;
    this.delegateEvents({
      'submit #addForm': 'addMemo',
      'click .cancel': 'cancel'
    });
  }

  addMemo(e: JQuery.Event): void {
    console.log('addMemo');
    e.preventDefault();
    const title = this.$('input[name="title"]').val()?.toString() || '';
    const content = this.$('textarea[name="content"]').val()?.toString() || '';
    this.collection.add(new Memo({ title, content }));
    this.hideView();
  }

  cancel(e: JQuery.Event): void {
    console.log('cancel');
    e.preventDefault();
    this.hideView();
  }

  render(): this {
    // Render editTemplate
    this.$el.html(editTemplate());
    this.$el.show();
    return this;
  }

  hideView(): void {
    this.$el.hide();
    window.app.router.navigate('', { trigger: true });
  }
}

export default EditView;
