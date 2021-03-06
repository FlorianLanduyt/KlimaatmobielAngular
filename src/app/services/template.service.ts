import { Injectable } from '@angular/core';
import { ProductTemplate } from '../types/productTemplate.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CategoryTemplate } from '../types/categoryTemplate.model';
import { Observable } from 'rxjs';
import {ProjectTemplate} from '../types/projectTemplate.model';
import {Project} from '../types/project.model';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  public schoolId = 1;

  constructor(private http: HttpClient) {
    // Dit is om makkelijk te kunnen testen met de data die in de database zit als mockdata
    // later kan dit veranderd worden naar de classroomId van de ingelogde gebruiker
    
  }

  // project templates
  updateProjectTemplate(id: number, template: ProjectTemplate): Observable<ProjectTemplate> {
    console.log(template.toJson());
    console.log("dit was in de put methode");
    return this.http.put<ProjectTemplate>(`${environment.apiUrl}/ProjectTemplate/${id}`,
      template.toJson()).pipe(map(ProjectTemplate.fromJSON));
  }

  getProjectTemplate$(id: number) {
    return this.http.get<ProjectTemplate>(`${environment.apiUrl}/ProjectTemplate/${id}`).pipe(
      map(x => ProjectTemplate.fromJSON(x))
    );
  }
  addNewProjecttemplate(projecttemplate: ProjectTemplate): Observable<ProjectTemplate> {
    return this.http.post(`${environment.apiUrl}/School/addProjectTemplate/${this.schoolId}`,
      projecttemplate.toJson()).pipe(map(ProjectTemplate.fromJSON));
  }


  getProjectTemplates$(): Observable<ProjectTemplate[]> {
    return this.http.get<ProjectTemplate[]>(`${environment.apiUrl}/ProjectTemplate/projecttemplates/${this.schoolId}`).pipe(
      map((list: any[]): ProjectTemplate[] => list.map(ProjectTemplate.fromJSON))
    );
  }

  // product templates
  getProductTemplates$(): Observable<ProductTemplate[]> {
    return this.http.get<ProductTemplate[]>(`${environment.apiUrl}/School/productTemplates/${this.schoolId}`)
      .pipe(
        map((list: any[]): ProductTemplate[] => {
          return list.map(ProductTemplate.fromJSON);
        })
      );
  }

  addProductTemplate(productTemplate: ProductTemplate) {
    console.log(productTemplate.toJson());
    return this.http.post(`${environment.apiUrl}/School/addProductTemplate/1`, productTemplate.toJson());
  }

  getCategoryTemplates$(): Observable<CategoryTemplate[]>{
    let test = this.http.get<CategoryTemplate[]>(`${environment.apiUrl}/ProductTemplate/GetCategories`)
    .pipe(map(x => x.map(c => CategoryTemplate.fromJSON(c)))
    );
    return test;
  }

  getProductTemplate(id): Observable<ProductTemplate> {
    return this.http.get<ProductTemplate>(`${environment.apiUrl}/ProductTemplate/${id}`)
      .pipe(map(p => {
        console.log(p);
        console.log(ProductTemplate.fromJSON(p));
        return ProductTemplate.fromJSON(p);
      }));
  }

  editProductTemplate(productTemp: ProductTemplate) {
    return this.http.put<ProductTemplate>(`${environment.apiUrl}/ProductTemplate/${productTemp.productTemplateId}/`,
      productTemp.toJson()).pipe(map(ProductTemplate.fromJSON));
  }

  deleteProductTemplate(productTemplate: ProductTemplate) {
    return this.http.delete<ProductTemplate>(`${environment.apiUrl}/ProductTemplate/${productTemplate.productTemplateId}`);
  }
}
