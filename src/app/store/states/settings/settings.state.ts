import {Action, State, StateContext} from "@ngxs/store";
import {AddSettings} from "../../actions/settings/settings.actions";

interface ISettingsStateModel {
    settings: {
        activeAccount?: boolean;
        socialNetwork?: Array<string>;
        workPhoneNumber?: string;
        firstName?: string;
        lastName?: string;
        userServices?: Array<{
            service?: string;
            price?: string;
        }>;
        additionalServices?: Array<string>;
        address?: Array<string>;
        whatsapp?: string;
        telegram?: string;
        typeUser?: Array<number>;
    }
}

@State<ISettingsStateModel>({
    name: 'settings',
    defaults: {
        settings: null,
    },
})
export class SettingsState {
    @Action(AddSettings)
    setSettings(ctx: StateContext<ISettingsStateModel>, { settings }: AddSettings) {
        ctx.patchState({ settings });
    }
}