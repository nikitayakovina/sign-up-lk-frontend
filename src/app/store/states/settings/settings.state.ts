import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  AddSettings,
  DeleteSettings,
  ISettingsAdd,
  UpdateSettings,
} from '../../actions/settings/settings.actions';
import { Guid } from 'guid-typescript';

@State<ISettingsAdd[]>({
  name: 'settings',
  defaults: [],
})
export class SettingsState {
  @Action(AddSettings)
  setSettings(ctx: StateContext<ISettingsAdd[]>, { settings }: AddSettings) {
    const state = ctx.getState();
    ctx.setState([...state, { ...settings, id: Guid.create() }]);
  }

  @Action(UpdateSettings)
  updateSettings(ctx: StateContext<ISettingsAdd[]>, { id, changes }: UpdateSettings) {
    const state = ctx.getState();
    const index = state.findIndex((item) => item.id === id);

    if (index !== -1) {
      const updatedItem = { ...state[index], ...changes };
      const updatedState = [...state.slice(0, index), updatedItem, ...state.slice(index + 1)];
      ctx.setState(updatedState);
    }
  }

  @Action(DeleteSettings)
  deleteSettings(ctx: StateContext<ISettingsAdd[]>, { id }: DeleteSettings) {
    const state = ctx.getState();
    const index = state.findIndex((item) => item.id === id);

    if (index !== -1) {
      const updatedState = [...state.slice(0, index), ...state.slice(index + 1)];
      ctx.setState(updatedState);
    }
  }

  @Selector()
  static getSettings(state: ISettingsAdd[]) {
    return state;
  }
}
