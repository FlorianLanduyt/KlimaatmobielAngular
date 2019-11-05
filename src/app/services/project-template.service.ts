import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Project} from '../types/project.model';
import {map} from 'rxjs/operators';
import { ProjectTemplate } from '../types/project-template-model';
@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private _templateId: number;
  constructor(private http: HttpClient) {
    // Dit is om makkelijk te kunnen testen met de data die in de database zit als mockdata
    // later kan dit veranderd worden naar de classroomId van de ingelogde gebruiker
    this._templateId = 1;

  }
  getProject$(id: number) {
    return this.http.get<ProjectTemplate>(`${environment.apiUrl}/ProjectTemplate/${this._templateId}`).pipe(
      map(x => ProjectTemplate.fromJSON(x))
    );
  }
}
