import { EventModel, EventModelConfig } from "@bryntum/calendar";


type AppEventModelConfig = EventModelConfig & {
  client: string;
  employee: string;
}

export default class AppEventModel extends EventModel {

  static get $name(): string {
      return 'AppEventModel';
  }

  static override get fields() : object[] {
      return [
          { name : 'client' },
          { name : 'employee' }        ];
  }

  public client?: string
  public employee?: string

  constructor(config: Partial<AppEventModelConfig>) {
      super(config);
  }
}
