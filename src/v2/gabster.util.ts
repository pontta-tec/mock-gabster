export interface Identifiable {
  id: string;
}

export const SINGLE_META_DEFAULT: any = {
  IAM_unidade_id: '135',
  IAM_dominio_id: '205',
};

export function randomElement(elements: any[]) {
  if (!elements || !elements.length) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
}

export function elementWithId(elements: Identifiable[], id: string) {
  const found = elements.find((e) => e.id === id);
  if (found) {
    return found;
  }

  const element = randomElement(elements);
  if (!element) {
    return null;
  }
  element.id = id;
  return element;
}

export function paginated(
  elements: any,
  query: { offset?: number; limit?: number },
) {
  elements.meta.offset = query.offset > 0 ? query.offset : 0;
  elements.meta.limit = query.limit > 0 ? query.limit : 30;
  if (elements.meta.limit < elements.objects.length) {
    elements.objects = elements.objects.splice(0, elements.meta.limit - 1);
  }
  return elements;
}
