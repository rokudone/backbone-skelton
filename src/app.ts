import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

class AppView extends Backbone.View<Backbone.Model> {
    constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
        super(options);
        this.render();
    }

    render(): this {
        this.$el.html('Hello, Backbone.js with TypeScript!');
        return this;
    }
}

const appView = new AppView({ el: '#app' });