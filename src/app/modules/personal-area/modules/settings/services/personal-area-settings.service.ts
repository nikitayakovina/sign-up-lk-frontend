import { Injectable } from '@angular/core';
import { SettingsService } from '../../../../../api/open-api/services/settings.service';
import { PostSearchServiceSettingsRequest } from '../../../../../api/open-api/models/post-search-service-settings-request';
import {Observable, tap} from 'rxjs';
import { PostSearchServiceSettingsResponse } from '../../../../../api/open-api/models/post-search-service-settings-response';
import { GetSearchServiceSettingsResponse } from '../../../../../api/open-api/models/get-search-service-settings-response';
import {Store} from "@ngxs/store";
import {AddSettings} from "../../../../../store/actions/settings/settings.actions";

@Injectable({
  providedIn: 'root',
})
export class PersonalAreaSettingsService {
  constructor(private settingsService: SettingsService, private store: Store) {}

  public fetchData(userId: string): Observable<GetSearchServiceSettingsResponse> {
    return this.settingsService.apiSettingsSearchServiceGet({ token: userId })
        .pipe(tap(settings => {
          this.store.dispatch(new AddSettings(settings.data));
        }));
  }

  public submitSettings(
    token: string,
    body: PostSearchServiceSettingsRequest,
  ): Observable<PostSearchServiceSettingsResponse> {
    return this.settingsService.apiSettingsSearchServicePost({ token, body });
  }
}
