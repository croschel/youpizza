/* eslint-disable import/prefer-default-export */
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export function formatDay(date) {
  const day = format(date, 'iiii', { locale: pt });
  return day;
}
