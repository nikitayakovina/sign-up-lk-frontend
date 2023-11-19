import { Injectable } from '@angular/core';
import { SettingsService } from '../../../api/open-api/services/settings.service';
import { PostSearchServiceSettingsRequest } from '../../../api/open-api/models/post-search-service-settings-request';
import { Observable } from 'rxjs';
import { PostSearchServiceSettingsResponse } from '../../../api/open-api/models/post-search-service-settings-response';
import { GetSearchServiceSettingsResponse } from '../../../api/open-api/models/get-search-service-settings-response';

@Injectable({
  providedIn: 'root',
})
export class PersonalAreaSettingsService {
  constructor(private settingsService: SettingsService) {}

  public fetchData(userId: string): Observable<GetSearchServiceSettingsResponse> {
    return this.settingsService.apiSettingsSearchServiceGet({ userId });
  }

  public submitSettings(
    body: PostSearchServiceSettingsRequest,
  ): Observable<PostSearchServiceSettingsResponse> {
    return this.settingsService.apiSettingsSearchServicePost({ body });
  }
}
