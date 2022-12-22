import ClassRoom from './0-classroom';

export default function initializeRooms() {
  let returnValue = [];
  const one = new ClassRoom(19);
  const two = new ClassRoom(20);
  const three = new ClassRoom(34);
  returnValue = [one, two, three];
  return returnValue;
}
