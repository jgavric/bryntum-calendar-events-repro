export interface ICalendarDataRecord {
  entityId: string;
  entityType: string;
  entityRef: string;
}

export interface IGetCalendarViewModel {
  entityType: string;
  entityId: string;
  isDeep: boolean;
}
