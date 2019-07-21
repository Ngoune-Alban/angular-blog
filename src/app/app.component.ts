import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  


  posts = [
  
	  {
		  title: "Mon premier post",
		  content: "Dans angular JS, le support mobile est absent, car il n'etait pas concu pour rappeler le support mobile, pourtant dans les dernieres formes de support mobile angular est disponible.Dans angular JS ou Angular 1.0,les codes d'annimation etaient englobes par defaut. que vous ayz besoin ou non. Cependant, a partir de angular 4, le package est directement integre",
		  loveIts: 1,
		  created_at: new Date()
	  },

	  {
		  title: "Mon deuxiem post",
		  content: " In angular JS, the mobile support is absent, since it was not designed to recall the mobile support, yet in the latest forms of angular mobile support is available. In angular JS or Angular 1.0, the annimation codes were encompassed by default. whether you need it or not. However, starting from angular 4, the package is directly integrated",
		  loveIts: 1,
		  created_at: new Date()
	  },

	  {
		  title: "Encore un post",
		  content: "In hoekige JS is de mobiele ondersteuning afwezig, omdat deze niet is ontworpen om de mobiele ondersteuning terug te roepen, maar in de nieuwste vormen van hoekige mobiele ondersteuning is beschikbaar.In hoekige JS of Angular 1.0 waren de annimatiecodes ondergebracht door default. of je het nodig hebt of niet. Echter, uitgaande van hoek 4, is het pakket direct geïntegreerd",
		  loveIts: 1,
		  created_at: new Date()
	  }

  ]
}
