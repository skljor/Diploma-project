import { SubOrg } from '../../../server/src/types/sub-org';

interface SuborgsSubject {
  listeners: SuborgsObserver[];
  notify(structures: SubOrg[]): void;
  subscribe(observer: SuborgsObserver): void;
}

interface SuborgsObserver {
  listenSuborgsUpdate(suborgs: SubOrg[]): void
}

export { SuborgsSubject, SuborgsObserver }