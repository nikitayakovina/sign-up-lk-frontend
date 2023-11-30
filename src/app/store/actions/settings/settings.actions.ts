import {PostSearchServiceSettingsRequest} from "../../../api/open-api/models/post-search-service-settings-request";

export class AddSettings {
    static readonly type = '[Settings] Add';
    constructor(public settings: PostSearchServiceSettingsRequest) {
    }
}