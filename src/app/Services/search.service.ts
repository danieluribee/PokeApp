import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SearchService {
  private searchUrl: any;

  constructor(private http: HttpClient) {
    this.searchUrl = "http://pokeapi.co/api/v2/pokemon";
  }

  getAll() {
    return this.http.get(this.searchUrl);
  }

  getByName(pokemonName: String) {
    return this.http.get(this.searchUrl + "/" + pokemonName + "/");
  }

  movePage(url: String) {
    return this.http.get(url.toString());
  }
}
