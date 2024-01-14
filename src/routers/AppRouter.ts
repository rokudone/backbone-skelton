import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import MemoCollection from '../collections/MemoCollection';
import HeaderView from '../views/HeaderView';
import EditView from '../views/EditView';
import ListView from '../views/ListView';
import Memo from '../models/Memo';

class AppRouter extends Backbone.Router {
    collection: MemoCollection;
    headerView: HeaderView;
    editView: EditView;
    listView: ListView;

    routes = {
        "": "home",
        "create": "add",
    };

    constructor(options?: Backbone.RouterOptions) {
        super(options);
        this.collection = new MemoCollection([
            new Memo({ title: 'Meeting Notes', content: 'Discussed project timeline' }),
            new Memo({ title: 'Ideas', content: 'Brainstorming for new features' }),
            new Memo({ title: 'To-Do', content: 'Update documentation' })
        ]);
        this.headerView = new HeaderView({el:$("#header")});
        this.editView = new EditView({el:$("#edit"), collection:this.collection});
        this.listView = new ListView({el:$("#list"), collection:this.collection});
        this.initialize();
        this._bindRoutes();
    }


    home() {
        console.log('home');
        this.editView.hideView();
    }

    add() {
        console.log('add');
        this.editView.model = new Memo(null, {collection:this.collection});
        this.editView.render();
    }
}

export default AppRouter;
