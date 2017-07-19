import { Routes,RouterModule } from '@angular/router';
import { CategoryModelsComponent } from './category-models/category-models.component';
import { AddcategoryComponent } from './category-models/addcategory.component';
import { CityModelsComponent } from './city-models/city-models.component';


import { ReviewModelsComponent } from './review-models/review-models.component';
import { AddcityComponent } from './city-models/addcity.component';
import { StateModelsComponent } from './state-models/state-models.component';
import { AddstateComponent } from './state-models/addstate.component';
import { AddsubcategoryComponent } from './subcategory-models/addsubcategory.component';
import { SubcategoryModelsComponent } from './subcategory-models/subcategory-models.component';


import { FineModelsComponent } from './fine-models/fine-models.component';
import { AddfineComponent } from './fine-models/addfine.component';




import { DonateModelsComponent } from './donate-models/donate-models.component';

import { UserModelsComponent } from './user-models/user-models.component';

import { TransModelsComponent } from './trans-models/trans-models.component';
import { BookModelsComponent } from './book-models/book-models.component';
import { AddbookComponent } from './book-models/addbook.component';



import { AdduserComponent } from './user-models/adduser.component';


import { AdddonateComponent } from './donate-models/adddonate.component';

import { SuggestionModelsComponent } from './suggestion-models/suggestion-models.component';
import { AddsuggestionComponent } from './suggestion-models/addsuggestion.component';

import { PacModelsComponent } from './pac-models/pac-models.component';
import { AddpacComponent } from './pac-models/addpac.component';

import { MainModelsComponent } from './main-models/main-models.component';
import { LoginComponent } from './login/login.component';

import { TransdescModelComponent } from './transdesc-model/transdesc-model.component';

import { BookmailModelComponent } from './bookmail-model/bookmail-model.component';

import { PacmailModelComponent } from './pacmail-model/pacmail-model.component';

import { ContactModelComponent } from './contact-model/contact-model.component';
import { BookuserModelComponent } from './bookuser-model/bookuser-model.component';

const router:Routes=[

{path:'',redirectTo:'/allBook',pathMatch:'full'},
{path:'allCategory',component:CategoryModelsComponent },
{path:'addCategory/:pk_cat_id',component:AddcategoryComponent},
{path:'updateCategory/:pk_cat_id',component:AddcategoryComponent },


/*{path:'allCity',component:CityModelsComponent},
{path:'addCity/:pk_city_id',component:AddcityComponent},
{path:'updateCity/:pk_city_id',component:AddcityComponent},
*/

{path:'allReview',component:ReviewModelsComponent },
{path:'allTran',component:TransModelsComponent},


{path:'allPac',component:PacModelsComponent },
{path:'addPac/:pk_pac_id',component:AddpacComponent},
{path:'updatePac/:pk_pac_id',component:AddpacComponent},


{path:'allState',component:StateModelsComponent},
{path:'addState/:pk_state_id',component:AddstateComponent},
{path:'updateState/:pk_state_id',component:AddstateComponent},


{path:'allSubcategory',component:SubcategoryModelsComponent},
{path:'addSubcategory/:pk_subcat_id',component:AddsubcategoryComponent},
{path:'updateSubcategory/:pk_subcat_id',component:AddsubcategoryComponent},

{path:'allFine',component:FineModelsComponent},
{path:'addFine/:pk_fine_id',component:AddfineComponent},
{path:'updateFine/:pk_fine_id',component:AddfineComponent},


{path:'allBook',component:BookModelsComponent},
{path:'addBook/:pk_book_id',component:AddbookComponent},
{path:'updateBook/:pk_book_id',component:AddbookComponent},

{path:'allSuggestion',component:SuggestionModelsComponent},
{path:'addSuggestion/:pk_suggestion_id',component:AddsuggestionComponent},
{path:'updateSuggestion/:pk_suggestion_id',component:AddsuggestionComponent},

{path:'allDonate',component:DonateModelsComponent},
{path:'addDonate/:pk_donate_id',component:AdddonateComponent},
{path:'updateDonate/:pk_donate_id',component:AdddonateComponent},


{path:'allUser',component:UserModelsComponent},
{path:'addUser/:pk_user_id',component:AdduserComponent},
{path:'updateUser/:pk_user_id',component:AdduserComponent},



{path:'bookmail',component:BookmailModelComponent},

{path:'pacmail',component:PacmailModelComponent},
{path:'transdesc',component:TransdescModelComponent},
{path:'bookuser',component:BookuserModelComponent},
{path:'contactus',component:ContactModelComponent},
{path:'main',component:MainModelsComponent},
//{path:'login',component:LoginComponent}


];
export const routes=RouterModule.forRoot(router);