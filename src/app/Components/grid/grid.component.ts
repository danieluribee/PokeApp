import { Component, Input } from "@angular/core";
import { SearchService } from "../../Services/search.service";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"],
  providers: [SearchService]
})
export class GridComponent {
  @Input() pokemons: any;

  constructor(private SearchService: SearchService) {}

  movePage(url: String) {
    this.SearchService.movePage(url).subscribe(
      data => (this.pokemons = data),
      err => {
        this.pokemons = {};
        this.pokemons.results = [];
      },
      () => console.log("HTTP request completed.")
    );
  }
}
