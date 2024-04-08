# AngularIntroduction

## Βήμα 12: Reactive Forms
 
- Ξεκινάμε με τα αντίστοιχα βήματα όπως στο βήμα 11.
 
Η φόρμα ορίζεται στο component και συνδέεται με τα input του template. Ένας click handler μεταφέρει τα δεδομένα στο component και στη συνέχεια ένα EventEmitter μεταφέρει τα δεδομένα στο component γονέα.
 
- Χρήση του `ReactiveFormsModule` στον πίνακα imports του component (εμπλουτίζει τα templates με επιπλέον HTML markup ώστε να μπορούν να συσχετιστούν με τα χαρακτηριστικά του component).
- Χρήση των κλάσεων `FormGroup` και `FormControl` για τη δόμηση του αντικειμένου που παράγεται από τη φόρμα. Χρήση των `Validators`.
- Δέσμευση του χαρακτηριστικού `form` του component με χρήση του `<form [formGroup]="form">...</form>`.
- Σύνδεση του input με το `FormControl` με χρήση του `formControlName`.
- Άμεση πρόσβαση στο πεδίο της φόρμας με το `form.get('όνομα πεδίου')`
- Κατά το Submit το χαρακτηριστικό `form` έχει ήδη τιμή στο component.

## Βήμα 11: Template Driven Forms
 
- Δημιουργία των `EpersonTemplateDrivenFormComponent` και `TemplateDrivenFormExampleComponent`.
- Ενημέρωση του μενού της εφαρμογής μας (στο `app.routes.ts` και στο `list-group-menu.component.ts`).
- Επέμβαση στο `SimpleDatatableComponent` για την περίπτωση του κενού πίνακα.
- Χρήση του Angular Forms Module.
 
Η φόρμα ορίζεται στο template και μεταφέρει δεδομένα στο component κατά την υποβολή της. Συνήθως τότε, ένα EventEmitter μεταφέρει τα δεδομένα στο component γονέα.
 
- Χρήση του `FormsModule` στον πίνακα imports του component (εμπλουτίζει τα templates με επιπλέον HTML markup ώστε να δημιουργούνται objects από τις φόρμες).
- `<form #form="ngForm">...</form>` ορίζει πως η HTML φόρμα δημιουργεί ένα αντικείμενο που είναι διαχειρίσιμο στα πλαίσια του template με τη μεταβλητή (template variable) `form`.
- Το αντικείμενο `form` περνά σαν όρισμα στο `onSubmit(form)` όταν συμβεί το event `onSubmit` (ελέγχεται από το κουμπί Submit που μπορεί να πατηθεί μόνο όταν η φόρμα είναι ορθά συμπληρωμένη (valid)).
- Δίνουμε στο name του input το όνομα του χαρακτηριστικού του αντικειμένου που παράγει η φόρμα και σχετίζεται (το χαρακτηριστικό) με το συγκεκριμένο input. Το συγκεκριμένο χαρακτηριστικό συμμετέχει στο αντικείμενο μόνο αν συμπεριλάβουμε την οδηγία `ngModel`.
- Με το `#givenName="ngModel"` δηλώνουμε τη μεταβλητή template με όνομα `givenName` που είναι αντικείμενο που μπορεί να εξεταστεί για την ορθότητά του με το `givenName.errors` και να χρησιμοποιηθεί για την υπο συνθήκη εμφάνιση επεξηγηματικού κειμένου για το ενδεχόμενο λάθος ορθότητας.
has context menu



## Βήμα 10: Angular Material
 
- Εγκατάσταση του Angular Material και του Angular CDK:
 
  ```bash
  ❯ ng add @angular/material
  ℹ Using package manager: npm
  ✔ Found compatible package version: @angular/material@17.3.2.
  ✔ Package information loaded.
 
  The package @angular/material@17.3.2 will be installed and executed.
  Would you like to proceed? Yes
  ✔ Packages successfully installed.
  ? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview:
https://material.angular.io?theme=indigo-pink ]
  ? Set up global Angular Material typography styles? No
  ? Include the Angular animations module? Include and enable animations
  UPDATE package.json (1396 bytes)
  ✔ Packages installed successfully.
  UPDATE src/app/app.config.ts (338 bytes)
  UPDATE angular.json (3652 bytes)
  UPDATE src/index.html (516 bytes)
  UPDATE src/styles.css (181 bytes)
  ```
 
- Επέμβαση στο `PersonTableComponent` για να χειρίζεται δεδομένα είτε `Person` είτε `EPerson`.
- Επέμβαση στο `ComponentOutputExampleComponent` και αντικατάσταση του `alert` με το `dialog` του Angular Material (https://t.ly/JLFka).

## Βήμα 9: Component Output
 
- Δημιουργία του `ComponentOutputExampleComponent` και ενημέρωση του μενού της εφαρμογής μας (στο `app.routes.ts` και στο `list-group-menu.component.ts`).
- Ενημέρωση του `SimpleDataTableComponent` ώστε να περνάει σαν έξοδο τη γραμμή του πίνακα που επιλέγεται με διπλό κλικ.
  - Χρήση του decorator `@Output()` στο χαρακτηριστικό `personClicked` τύπου `EPerson` στο `SimpleDataTableComponent`.
  - Το output είναι ένα `EventEmitter<T>` που μεταφέρει δεδομένα του συγκεκριμένου τύπου `<Τ>`.

## Βήμα 8: Simple Datatable
 
- Χρήση του https://cobbl.io/ για να παράξουμε ένα πίνακα με πολλά δεδομένα τύπου `ΕPerson` που ορίζουμε στο `/shared/interfaces/person.ts`:
 
  ```typescript
  export interface EPerson {
    givenName: string;
    surName: string;
    age: string;
    email: string;
    address: string;
    education: string;
  }
 
  export const ManyPerson: EPerson[] = [
    {
      given_name: 'Sarah',
      surName: 'Howard',
      age: '41',
      email: 's.m.howard@yahoo.com',
      education: 'Some college, no degree',
    },
    ...
  ```
 
- Δημιουργία του `SimpleDataTableComponent`: λαμβάνει δεδομένα τύπου `EPerson` και τα εμφανίζει σε έναν πίνακα με δυνατότητα ταξινόμησης ανά στήλη
- Δημιουργία του `SimpleDataTableExampleComponent`: χρησιμοποιεί το `SimpleDataTableComponent`
- Ενημέρωση του μενού της εφαρμογής μας
 
  - `app.routes.ts`:
 
    ```typescript
    ...
    {
      path: 'simple-data-table-example',
      component: SimpleDatatableExampleComponent,
    }
    ...
    ```
 
  - `list-group-menu.component.ts`:
 
    ```typescript
    ...
    {
      text: 'Simple Data Table Example',
      routerLink: 'simple-data-table-example',
    }
    ...
    ```
 
- Εγκατάταση του `lodash-es`:
 
  ```bash
  npm i lodash-es
  npm i --save-dev @types/lodash-es
  ```

## Βήμα 7: Fancy App Menu με το [list-group](https://t.ly/vmYc2) του Bootstrap
 
- Δημιουργία νέου interface `MenuItem` στο αρχείο `shared/interfaces/menu-item.ts`:
 
  ```typescript
  export interface MenuItem {
    text: string; // Κείμενο που εμφανίζεται στο μενού
    routerLink: string; // Το path που αντιστοιχεί στο component
  }
  ```
 
- Δημιουργία του component `ListGroupMenuComponent` με την εντολή:
 
  ```bash
  ng g c components/list-group-menu
  ```
 
- To μενού της εφαρμογής μας είναι ένας πίνακας αντικειμένων `MenuEntry`:
 
  ```typescript
  menu: MenuEntry[] = [
    { text: 'Component Input Example', routerLink: 'component-input-example' },
    { text: '@for Directive Example', routerLink: 'for-directive-example' },
    { text: 'Event Bind Example', routerLink: 'event-bind-example' },
  ];
  ```

## Βήμα 6: Routing
 
- Σκοπός μας είναι να κάνουμε επιλογές από το μενού στα αριστερά και τα component να εμφανίζονται στο χώρο δεξιά.
- Δημιουργία του Welcome component, αυτό που θα εμφανίζεται πρώτο όταν ξεκινήσει η εφαρμογή (χρησιμοποιεί κι ένα λογότυπο από το `/assets`):
 
  ```bash
  ng g c welcome
  ```
 
- Στο αρχείο `app.routes.ts` ο πίνακας `routes` περιέχει αντικείμενα που είναι ο κατάλογος των path που εμφανίζονται στο μενού της εφαρμογής μαζί με το Angular component που αντιστοιχεί στο path.
 
  ```typescript
  import { Routes } from "@angular/router";
  import { EventBindExampleComponent } from "src/app/components/event-bind-example/event-bind-example.component";
  import { WelcomeComponent } from "./components/welcome/welcome.component";
 
  export const routes: Routes = [
    { path: "event-bind-example", component: EventBindExampleComponent },
    { path: "welcome", component: WelcomeComponent },
    { path: "", redirectTo: "/welcome", pathMatch: "full" },
  ];
  ```
 
- Ήδη στο αρχείο `app.config.ts` ο κατάλογος των routes περνάει στο `provideRouter`:
 
  ```typescript
  import { ApplicationConfig } from "@angular/core";
  import { provideRouter } from "@angular/router";
 
  import { routes } from "./app.routes";
 
  export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)],
  };
  ```
 
- Το ακριβές σημείο στο template που θα εισάγονται τα component δηλώνεται με τη χρήση του tag `<router-outlet>`:
 
  ```html
  ...
<span class="flex-grow-1 p-2 text-nowrap">
<router-outlet></router-outlet>
</span>
  ...
  ```
 
- Παράδειγμα ροής για μια επιλογή του χρήστη:
 
  1. Ο χρήστης επιλέγει κάτι από το μενού που στην HTML το tag που αφορά την επιλογή συμπεριλαμβάνει την οδηγία `routerLink`, π.χ. στο `app.component.html` το tag `<span role="button" routerLink="event-bind-example">Event Bind Example</span>`.
  2. Ο έλεγχος μεταβιβάζεται στο αρχείο `app.routes.ts` όπου γίνεται αναζήτηση στον πίνακα `routes` για την εύρεση του αντικειμένου που έχει τιμή στο χαρακτηριστικό `path` ίδια με την τιμή του `routerLink` στο tag από το βήμα 1.
  3. To URL αλλάζει σε αυτό που αντιστοιχεί στο path του αντικειμένου του βήματος 2.
  4. Στο πλαίσιο του `<router-outlet></router-outlet>` εμφανίζεται το component από το χαρακτηριστικό του αντικειμένου του βήματος 2.
 
- Δημιουργία των `ComponentInputExampleComponent` και `ForDirectiveExampleComponent` και προσθήκη στο μενού της εφαρμογής:
 
  1. Ενημέρωση του αρχείου `app.routes.ts`
  2. Ενημέρωση του html μενού με τις κατάλληλες οδηγίες `routerLink`

## Βήμα 5: Event binding
 
- Δέσμευση μεθόδου της κλάσης (event handler) στο συμβάν `event` του template με χρήση του `(eventName)="onEventName($event)"`
 
  ```html
<button (click)="onAddPerson()">Add Person</button>
  ```
 
- Χρήση του event `input` από ένα HTML input element για ανάγνωση της τιμής του στην κλάση και στη συνέχεια πέρασμα πίσω στο template με χρήση της απλής δέσμευση με το `{{ <atribute_name > }}`
 
  ```html
<input type="text" (input)="onInput($event)" />
  ```

## Βήμα 4: @for Template Directive
 
- Ορισμός χαρακτηριστικού `persons` τύπου `Person[]` στην κλάση `AppComponent` (πίνακας αντικειμένων τύπου `Person`)
- Χρήση του template directive `@for(obj of objects); track obj` για την εμφάνιση των δεδομένων του πίνακα `persons` με τη χρήση του component `PersonTableComponent`
 
  ```html
  @for (user of users; track user) {
<app-person-table [person]="user"></app-person-table>
  }
  ```

## Βήμα 3: Component Input
 
- Δημιουργία interface για τα δεδομένα τύπου `Person`
 
  ```bash
  ng generate interface shared/interfaces/person
  ```
 
  ```typescript
  export interface Person {
    givenName: string;
    surName: string;
    age: number;
    email: string;
    address: string;
  }
  ```
 
- Χρήση του interface `Person` ως τύπο του χαρακτηριστικού `person` στο component `PersonTableComponent`
 
- Χρήση του decorator `@Input()` στο χαρακτηριστικό `person` τύπου `Person` ή `undefined` στο component `PersonTableComponent`
 
- Χρήση του `@if() {} @else {}` στο template του component `PersonTableComponent` για την υπό συνθήκη εμφάνιση των δεδομένων του χαρακτηριστικού `person`
 
- Η δέσμευση των χαρακτηριστικών της κλάσης `AppComponent` στο χαρακτηριστικό `person` του component `PersonTableComponent` γίνεται στο template του component `AppComponent`
 
  ```html
<app-person-table [person]="person0"></app-person-table>
<!-- Χωρίς δέσμευση στο επόμενο -->
<app-person-table></app-person-table>
<app-person-table [person]="person1"></app-person-table>
  ```
<<<<<<< HEAD
=======
## Βήμα 2: Δημιουργία νέου component
 
- Δημιουργία ενός νέου component με την εντολή `ng generate component components/person-table`.
- Μεταφορά του πίνακα από το `app.component.html` στο template του νέου component.
- Μεταφορά του χαρακτηριστικού `person` από την κλάση `AppComponent` στην κλάση `PersonTableComponent`.
- Συμπερίληψη της κλάσης `PersonTableComponent` στον πίνακα `imports` στην αρχικοποίηση του decorator στο αρχείο `app.component.ts`.
- Χρήση του νέου component στο template του `app.component.html` με την ετικέτα `<app-person-table></app-person-table>`.

>>>>>>> 02-new-component
## Βήμα 1: Απλή δέσμευση χαρακτηριστικών (one way binding)
 
- Χρήση του placeholder `{{ <atribute_name > }}` για τη δεσμευση του χαρακτηριστικού `attribute_name` στο template του component.
- Αν το χαρακτηριστικό της κλάσης είναι αντικείμενο τότε χρησιμοποιούμε τη γνωστή σύνταξη `{{ <object_name>.<attribute_name> }}`.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
