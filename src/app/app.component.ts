import { Component } from "@angular/core";
import { Chart } from "chart.js";
import { HttpClient } from "@angular/common/http";
import { Data } from "./models/Data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "chartng";
  data: Data[];
  constructor(private http: HttpClient) {}
}
