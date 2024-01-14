import Backbone from 'backbone';
import AppRouter from './routers/AppRouter';
import 'materialize-css/dist/css/materialize.min.css';
declare global {
    interface Window { app: {router: AppRouter}; }
}

window.app = window.app || {};

window.app.router = new AppRouter();

Backbone.history.start();