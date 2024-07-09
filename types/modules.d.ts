/**
 * mkdocs-material
 * @see https://github.com/squidfunk/mkdocs-material/blob/master/typings/_/index.d.ts#L93
 *
 * tablesort
 * @see https://github.com/tristen/tablesort
 */
import { Observable } from "rxjs";

declare global {
  var document$: Observable<Document>;
  class Tablesort {
    constructor(el: Element);
  }
}
