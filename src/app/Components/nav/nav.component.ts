import { Component, OnInit } from "@angular/core";
import { SearchService } from "../../Services/search.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
  providers: [SearchService]
})
export class NavComponent implements OnInit {
  private searchInput: any;
  private searchDrop: any;
  private pokemons: any;

  constructor(private SearchService: SearchService) {
    this.pokemons = {};
    this.pokemons.results = [];
  }

  ngOnInit() {
    this.searchInput = document.getElementById("searchInput");
    this.searchDrop = document.getElementById("searchDrop");
  }

  searchChangeHandler(event: any) {
    if (event.target.value == "All")
      this.searchInput.setAttribute("disabled", "");
    else this.searchInput.removeAttribute("disabled");
  }

  btnSearchClick(event: any) {
    if (this.searchDrop.value == "All") this.search();
    else this.search(this.searchInput.value);
  }

  search(pokemon: String = null) {
    if (pokemon == null || pokemon.trim() == "")
      this.SearchService.getAll().subscribe(
        data => (this.pokemons = data),
        err => {
          this.pokemons = {};
          this.pokemons.results = [];
        },
        () => console.log("HTTP request completed.")
      );
    else
      this.SearchService.getByName(pokemon).subscribe(
        data => {
          this.pokemons = {};
          this.pokemons.results = new Array(data);
        },
        err => {
          this.pokemons = {};
          this.pokemons.results = [];
        },
        () => console.log("HTTP request completed.")
      );
  }
}
