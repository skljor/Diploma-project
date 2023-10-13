import { Structures } from "../../../server/src/types/structures";

interface StructuresSubject {
  listeners: StructuresObserver[];
  notify(structures: Structures): void;
  subscribe(observer: StructuresObserver): void;
}

interface StructuresObserver {
  listernStructuresUpdate(structures: Structures): void
}

export { StructuresSubject, StructuresObserver }