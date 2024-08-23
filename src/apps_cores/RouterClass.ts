interface routes {
    name : string;
    path : string;
    component : any; 
}


class Router {
    routes : routes[];

    constructor() {
        this.routes = [];
    }

    addRoute(name : string, path : string, component : any) {
        this.routes.push({name, path, component});
    }

    public static main(): void { 
        const router = new Router();
        router.addRoute("Home", "/", "HomePage");
        router.addRoute("Proyects", "/proyects", "ProyectsPage");
        router.addRoute("About", "/about", "AboutPage");
        router.addRoute("Contact", "/contact", "ContactPage");
        router.addRoute("404", "/404", "NotFoundPage");
        console.log(router.routes);
    }
}


Router.main();

