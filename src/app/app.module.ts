import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderModelComponent } from './header-model/header-model.component';
import { CategoryServiceService } from './shared/category-service.service';
import { CategoryModelsComponent } from './category-models/category-models.component';
import { routes } from './app.routing';
import { AddcategoryComponent } from './category-models/addcategory.component';
import { CityModelsComponent } from './city-models/city-models.component';

import { CityServiceService } from './shared/city-service.service';

import { ReviewModelsComponent } from './review-models/review-models.component';
import { ReviewServiceService } from './shared/review-service.service';
import { AddcityComponent } from './city-models/addcity.component';
import { StateModelsComponent } from './state-models/state-models.component';

import { PacModelsComponent } from './pac-models/pac-models.component';
import { PacServiceService } from './shared/pac-service.service';
import { StateServiceService } from './shared/state-service.service';
import { AddstateComponent } from './state-models/addstate.component';
import { SubcategoryModelsComponent } from './subcategory-models/subcategory-models.component';
import { SubcategoryServiceService } from './shared/subcategory-service.service';
import { AddsubcategoryComponent } from './subcategory-models/addsubcategory.component';
import { DonateModelsComponent } from './donate-models/donate-models.component';
import { DonateServiceService } from './shared/donate-service.service';
import { SuggestionModelsComponent } from './suggestion-models/suggestion-models.component';
import { SuggestionServiceService } from './shared/suggestion-service.service';
import { UserModelsComponent } from './user-models/user-models.component';
import { BookModelsComponent } from './book-models/book-models.component';
import { UserServiceService } from './shared/user-service.service';
import { TransModelsComponent } from './trans-models/trans-models.component';
import { TransServiceService } from './shared/trans-service.service';
import { BookServiceService } from './shared/book-service.service';
import { FineModelsComponent } from './fine-models/fine-models.component';
import { FineServiceService } from './shared/fine-service.service';
import { AddfineComponent } from './fine-models/addfine.component';
import { AddbookComponent } from './book-models/addbook.component';



import { AdduserComponent } from './user-models/adduser.component';



import { AddsuggestionComponent } from './suggestion-models/addsuggestion.component';
import { AdddonateComponent } from './donate-models/adddonate.component';


import { AddpacComponent } from './pac-models/addpac.component';
import { CategoryfilterPipe } from './category-models/categoryfilter.pipe';
import { BookfilterPipe } from './book-models/bookfilter.pipe';
import { CityfilterPipe } from './city-models/cityfilter.pipe';
import { SucategoryfilterPipe } from './subcategory-models/sucategoryfilter.pipe';
import { SubcategoryfilterPipe } from './subcategory-models/subcategoryfilter.pipe';
import { ReviewfilterPipe } from './review-models/reviewfilter.pipe';
import { DonatefilterPipe } from './donate-models/donatefilter.pipe';
import { PacfilterPipe } from './pac-models/pacfilter.pipe';
import { FinefilterPipe } from './fine-models/finefilter.pipe';
import { SuggestionfilterPipe } from './suggestion-models/suggestionfilter.pipe';
import { UserfilterPipe } from './user-models/userfilter.pipe';


import { PaginatePipe } from './ng2paging/paginate.pipe';
import { PaginationService } from './ng2paging/pagination.service';
import { PaginationControlsComponent } from './ng2paging/pagination-controls.component';
import { PaginationControlsDirective } from './ng2paging/pagination-controls.directive';
import { PaginationInstance } from './ng2paging/pagination-instance';


import { LoginComponent } from './login/login.component';
import { MainModelsComponent } from './main-models/main-models.component';
import { Header1Component } from './header1/header1.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TransdescModelComponent } from './transdesc-model/transdesc-model.component';
import { BookmailModelComponent } from './bookmail-model/bookmail-model.component';
import { PacmailModelComponent } from './pacmail-model/pacmail-model.component';
import { DemoemailServiceService } from './shared/demoemail-service.service';
import { ContactModelComponent } from './contact-model/contact-model.component';

import { ContactusServiceService } from './shared/contactus-service.service';
import { BookuserModelComponent } from './bookuser-model/bookuser-model.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderModelComponent,
    CategoryModelsComponent,
    AddcategoryComponent,
    CityModelsComponent,
    ReviewModelsComponent,
    AddcityComponent,
    StateModelsComponent,
    PacModelsComponent,
    AddstateComponent,
    SubcategoryModelsComponent,
    AddsubcategoryComponent,
    DonateModelsComponent,
    SuggestionModelsComponent,
    UserModelsComponent,
    BookModelsComponent,
    TransModelsComponent,
    FineModelsComponent,
    AddfineComponent,
    AddbookComponent,

    AdduserComponent,
    AddsuggestionComponent,
    AdddonateComponent,



    AddpacComponent,
    CategoryfilterPipe,
    BookfilterPipe,
    CityfilterPipe,
    SucategoryfilterPipe,
    SubcategoryfilterPipe,
    ReviewfilterPipe,
    DonatefilterPipe,
    PacfilterPipe,
    FinefilterPipe,
    SuggestionfilterPipe,
    UserfilterPipe,
        PaginatePipe,
    PaginationControlsComponent,
    PaginationControlsDirective,

    MainModelsComponent,
    Header1Component,
    SidebarComponent,


    LoginComponent,


    TransdescModelComponent,


    BookmailModelComponent,


    PacmailModelComponent,


    ContactModelComponent,


    BookuserModelComponent





  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],

  
  providers: [PaginationService,CategoryServiceService,CityServiceService,ReviewServiceService,PacServiceService,
  StateServiceService,SubcategoryServiceService,DonateServiceService,SuggestionServiceService,
  UserServiceService,TransServiceService,BookServiceService,FineServiceService,DemoemailServiceService,ContactusServiceService],

  bootstrap: [AppComponent]
})
export class AppModule { }
