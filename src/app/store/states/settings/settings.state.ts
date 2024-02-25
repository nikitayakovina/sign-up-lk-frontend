import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddSettings, ISettingsAdd } from '../../actions/settings/settings.actions';

@State<ISettingsAdd>({
  name: 'settings',
  defaults: null,
})
export class SettingsState {
  @Action(AddSettings)
  setSettings(ctx: StateContext<ISettingsAdd>, { settings }: AddSettings) {
    ctx.patchState(settings);
  }

  @Selector()
  static getSettings(state: ISettingsAdd) {
    return state;
  }
}
