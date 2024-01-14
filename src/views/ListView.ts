import Backbone from 'backbone';
import MemoCollection from '../collections/MemoCollection';
import Memo from '../models/Memo';
import ItemView from './ItemView';

class ListView extends Backbone.View<Memo> {
  collection: MemoCollection;

  constructor(options: Backbone.ViewOptions<Memo> & { collection: MemoCollection }) {
    super(options);
    // optionsからcollectionを取得
    this.collection = options.collection;
    this.listenTo(this.collection, 'add', this.renderMemo);
    this.render();
  }

  render(): this {
    // Render memoTemplate
    this.collection.each(this.renderMemo, this);
    return this;
  }

  renderMemo(memo: Memo): void {
    const memoItemView = new ItemView({ model: memo });
    this.$el.append(memoItemView.render().el);
  }
}

export default ListView;
