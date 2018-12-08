export type Position = {
  id: Number,
  longitutde: Number,
  latitude: Number
};

export type MarkersType = Array<{
  key: String,
  position: Position,
  title: String,
  description: String,
  tables: any
}>;
