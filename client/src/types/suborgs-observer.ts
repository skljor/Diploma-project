import { Organizations } from "../../../server/src/types/organizations";

interface SuborgsSubject {
  listeners: SuborgsObserver[];
  notify(structures: Organizations): void;
  subscribe(observer: SuborgsObserver): void;
}

interface SuborgsObserver {
  listernSuborgsUpdate(suborgs: Organizations): void
}

export { SuborgsSubject, SuborgsObserver }