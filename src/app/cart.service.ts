import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CartService {
  itens = [];

  constructor(private http: HttpClient) {}

  addToCart(product) {
    this.itens.push(product);
  }

  getItems() {
    return this.itens;
  }

  clearCart() {
    this.itens = [];
    return this.itens;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
